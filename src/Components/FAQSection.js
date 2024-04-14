import React from 'react';
import './FAQSection.css'; // Import your CSS file for styling

const FAQSection = () => {
    return (
        <div className="faq-container">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <div className="faq-list">
                <div className="faq-item">
                    <h3 className="faq-question">How do I receive free stickers?</h3>
                    <p className="faq-answer">After submitting an address stickers will be mailed in an envelope!</p>
                </div>
                <div className="faq-item">
                    <h3 className="faq-question">How long will it take to receive my stickers?</h3>
                    <p className="faq-answer">Sticker delivery times vary depending on your location. Generally, you can expect to receive your stickers within 2-4 weeks after placing your request.</p>
                </div>
                <div className="faq-item">
                    <h3 className="faq-question">Is there a limit to how many stickers I can request?</h3>
                    <p className="faq-answer">No, there's no limit! Feel free to request as many stickers as you want.  Stickers will typically be sent out once a month.</p>
                </div>
                {/* Add more FAQ items as needed */}
            </div>
        </div>
    );
}

export default FAQSection;
