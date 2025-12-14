'use client';
import React from 'react';

const DisclaimerSection = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-black py-8 px-4">
            <div className="container mx-auto text-center text-gray-400 text-xs">
                <h3 className="font-bold text-sm text-white mb-2">DISCLAIMER</h3>
                <p className="max-w-4xl mx-auto">
                    The information on this website is for general informational purposes only and does not constitute legal advice. No attorney-client relationship is formed by using this website. The choice of a lawyer is an important decision and should not be based solely upon advertisements. Past results afford no guarantee of future results. Every case is different and must be judged on its own merits.
                </p>
                <p className="mt-4">&copy; {currentYear} Singh Associates. All rights reserved.</p>
            </div>
        </div>
    );
};

export default DisclaimerSection;
