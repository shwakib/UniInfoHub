import React, { useState, useEffect } from 'react';
import Navbar from '../components/header/navbar';
import Footer from '../components/footer/footer';
import '../css/adminDashboard.css';

function AdminDashboard() {
    const [bookedSchedules, setBookedSchedules] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch booked schedules from the API
    useEffect(() => {
        const fetchBookedSchedules = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/api/booked-schedules');
                if (!response.ok) {
                    throw new Error('Failed to fetch booked schedules.');
                }
                const data = await response.json();
                setBookedSchedules(data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchBookedSchedules();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="admin-dashboard-container">
                <h1>Admin Dashboard - Booked Schedules</h1>

                {loading ? (
                    <p className="admin-dashboard-message">Loading schedules...</p>
                ) : error ? (
                    <p className="admin-dashboard-error">{error}</p>
                ) : bookedSchedules.length === 0 ? (
                    <p className="admin-dashboard-message">No schedules found.</p>
                ) : (
                    <table className="admin-dashboard-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Department</th>
                                <th>Doctor</th>
                                <th>Student Email</th>
                                <th>Problem</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookedSchedules.map((schedule) => (
                                <tr key={schedule.id}>
                                    <td>{schedule.id}</td>
                                    <td>{schedule.date}</td>
                                    <td>{schedule.timeslot}</td>
                                    <td>{schedule.department_name}</td>
                                    <td>{schedule.doctor_name}</td>
                                    <td>{schedule.email}</td>
                                    <td>{schedule.problem}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default AdminDashboard;
