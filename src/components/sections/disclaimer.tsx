'use client';
import React from 'react';

const DisclaimerSection = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-black py-8 px-4">
            <div className="container mx-auto text-center text-gray-400 text-xs">
                <h3 className="font-bold text-sm text-white mb-2">DISCLAIMER</h3>
                <p className="max-w-4xl mx-auto">
                    The rules of the Indian Bar Council prohibit law firms from advertising and soliciting work through communication in the public domain. This website is meant solely for the purpose of information and not for the purpose of advertising. Singh Associates does not intend to solicit clients through this website. We do not take responsibility for decisions taken by the reader based solely on the information provided in the website. By 'ENTERING' the visitor acknowledges that the information provided in the website (a) does not amount to advertising or solicitation and (b) is meant only for his/her understanding about our activities and who we are.
                </p>
                <p className="mt-4">&copy; {currentYear} Singh Associates. All rights reserved.</p>
            </div>
        </div>
    );
};

export default DisclaimerSection;
