from flask import Flask, render_template, request, redirect
import smtplib
from email.message import EmailMessage
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/send', methods=['POST'])
def send():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    # Load email credentials from environment variables
    gmail_user = os.environ.get('GMAIL_USER')
    gmail_pass = os.environ.get('GMAIL_PASS')

    # Prepare the email
    msg = EmailMessage()
    msg['Subject'] = f'New Contact Form Submission from {name}'
    msg['From'] = gmail_user
    msg['To'] = os.environ.get('To_GMAIL_USER')
    msg.set_content(f'Name: {name}\nEmail: {email}\nMessage:\n{message}')

    # Send the email
    try:
        with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
            smtp.starttls()
            smtp.login(gmail_user, gmail_pass)
            smtp.send_message(msg)
        return redirect('/')
    except Exception as e:
        return f"Failed to send email: {e}"

if __name__ == '__main__':
    app.run(debug=True)
