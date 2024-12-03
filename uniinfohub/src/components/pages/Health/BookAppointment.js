import React, { useState, useEffect } from 'react';
import Navbar from '../../header/navbar';
import Footer from '../../footer/footer';
import '../../../css/bookappointment.css';

const generateTimeSlots = (start, end, interval) => {
    const slots = [];
    let current = new Date();
    const [startHour, startMinute] = start.split(':').map(Number);
    const [endHour, endMinute] = end.split(':').map(Number);

    current.setHours(startHour, startMinute, 0, 0); // Set to start time
    const endTime = new Date();
    endTime.setHours(endHour, endMinute, 0, 0); // Set to end time

    while (current <= endTime) {
        const hours = current.getHours().toString().padStart(2, '0');
        const minutes = current.getMinutes().toString().padStart(2, '0');
        slots.push(`${hours}:${minutes}`);
        current.setMinutes(current.getMinutes() + interval);
    }

    return slots;
};

function BookAppointment() {
    const [departments, setDepartments] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        date: '',
        time: '',
        problem: '',
        doctor_id: '',
    });

    const timeSlots = generateTimeSlots('09:00', '16:00', 30);
    const today = new Date().toISOString().split('T')[0];

    // Function to validate weekdays
    const isWeekend = (date) => {
        const day = new Date(date).getDay();
        return day === 5 || day === 6; // 6 = Saturday, 0 = Sunday
    };

    // Check if the selected date is Friday
    const isFriday = (date) => new Date(date).getDay() === 4;

    // Fetch departments from the API
    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/departments')
            .then(response => response.json())
            .then(data => setDepartments(data))
            .catch(error => console.error('Error fetching departments:', error));
    }, []);

    // Fetch doctors based on selected department
    useEffect(() => {
        if (selectedDepartment) {
            fetch(`http://127.0.0.1:5000/api/doctors?department_id=${selectedDepartment}`)
                .then(response => response.json())
                .then(data => setDoctors(data))
                .catch(error => console.error('Error fetching doctors:', error));
        } else {
            setDoctors([]);
        }
    }, [selectedDepartment]);

    // Handle form changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Validate weekends for date input
        if (name === 'date' && isWeekend(value)) {
            alert('Weekends are not allowed for booking.');
            return;
        }

        setFormData({ ...formData, [name]: value });
    };

    // Handle department selection
    const handleDepartmentChange = (e) => {
        const departmentId = e.target.value;
        setSelectedDepartment(departmentId);
        setFormData({ ...formData, doctor_id: '', department_id: departmentId });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...formData,
            timeslot: formData.time, // Map 'time' field to 'timeslot' for the backend
        };

        try {
            const response = await fetch('http://127.0.0.1:5000/api/booked-schedules', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const result = await response.json();
                alert(result.message || 'Appointment booked successfully!');
                // Reset form data after successful submission
                setFormData({
                    email: '',
                    date: '',
                    time: '',
                    problem: '',
                    doctor_id: '',
                });
                setSelectedDepartment('');
                setDoctors([]);
            } else {
                const errorResult = await response.json();
                alert(errorResult.message || 'Failed to book the appointment. Please try again.');
            }
        } catch (error) {
            console.error('Error booking appointment:', error);
            alert('An error occurred while booking the appointment. Please try again.');
        }
    };


    return (
        <div>
            <Navbar />
            <div className="book-appointment-form">
                <h1>Book an Appointment</h1>
                <form onSubmit={handleSubmit}>
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    {/* Date Field */}
                    <div>
                        <label htmlFor="date">Date:</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            min={today} // Restricts past dates
                            required
                        />
                    </div>

                    {/* Time Slot Dropdown */}
                    <div>
                        <label htmlFor="time">Time Slot:</label>
                        <select
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select a time slot</option>
                            {timeSlots.map((slot, index) => {
                                // Disable 12:00-13:00 on Fridays
                                const isLunchBreak =
                                    isFriday(formData.date) &&
                                    (slot >= '12:00' && slot < '13:00');
                                return (
                                    <option
                                        key={index}
                                        value={slot}
                                        disabled={isLunchBreak}
                                    >
                                        {slot}
                                        {isLunchBreak ? ' (Lunch Break)' : ''}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    {/* Problem Field */}
                    <div>
                        <label htmlFor="problem">Problem:</label>
                        <textarea
                            id="problem"
                            name="problem"
                            value={formData.problem}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>

                    {/* Department Dropdown */}
                    <div>
                        <label htmlFor="department">Department:</label>
                        <select
                            id="department"
                            name="department_id"
                            value={formData.department_id}
                            onChange={handleDepartmentChange}
                            required
                        >
                            <option value="">Select a department</option>
                            {departments.map(dept => (
                                <option key={dept.id} value={dept.id}>
                                    {dept.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Doctor Dropdown */}
                    <div>
                        <label htmlFor="doctor">Doctor:</label>
                        <select
                            id="doctor"
                            name="doctor_id"
                            value={formData.doctor_id}
                            onChange={handleInputChange}
                            required
                            disabled={!selectedDepartment}
                        >
                            <option value="">Select a doctor</option>
                            {doctors.map(doc => (
                                <option key={doc.id} value={doc.id}>
                                    {doc.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* Warning Message */}
                    <div style={{ color: 'red', marginTop: '20px', marginBottom: '10px', fontSize: '14px',textAlign:'justify',marginLeft:'5px' }}>
                        <strong>Warning:</strong> Please be sure that you don't have any conflicts on the selected date/time.
                        Missing appointments will charge 50$. You will be able to change/cancel the appointment 24 hours prior to
                        the appointment time.
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button type="submit">Book Appointment</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default BookAppointment;