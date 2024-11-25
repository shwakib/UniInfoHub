from flask import Blueprint, jsonify, request
import stripe
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize Stripe
stripe.api_key = os.getenv('STRIPE_SECRET_KEY')

# Create a Blueprint for checkout routes
checkout_bp = Blueprint('checkout', __name__)

@checkout_bp.route('/api/create-checkout-session', methods=['POST'])
def create_checkout_session():
    try:
        # Get the request data
        data = request.json
        email = data.get('email')
        amount = data.get('amount')

        # Validate input
        if not email or not amount:
            return jsonify({'error': 'Email and amount are required.'}), 400

        # Create a Stripe Checkout Session
        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            customer_email=email,
            line_items=[{
                'price_data': {
                    'currency': 'cad',
                    'product_data': {
                        'name': 'UWinCard Fund Load',
                    },
                    'unit_amount': int(amount),  # Amount in cents
                },
                'quantity': 1,
            }],
            mode='payment',
            success_url='http://localhost:3000/success',  # Replace with your success URL
            cancel_url='http://localhost:3000/cancel',    # Replace with your cancel URL
        )

        # Return the session ID
        return jsonify({'id': session.id})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
