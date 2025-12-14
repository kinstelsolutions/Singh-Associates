'use client';
import React, { useState, useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Button } from '../ui/button';

const DisclaimerDialog = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasAccepted = localStorage.getItem('disclaimerAccepted');
        if (!hasAccepted) {
            setIsOpen(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('disclaimerAccepted', 'true');
        setIsOpen(false);
    };

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent className="bg-background border-border">
                <AlertDialogHeader>
                    <AlertDialogTitle className="font-headline text-2xl text-primary">Disclaimer</AlertDialogTitle>
                    <AlertDialogDescription asChild>
                        <div className="text-muted-foreground text-sm max-h-[60vh] overflow-y-auto pr-4">
                        <p className="mt-4">
                            The rules of the Indian Bar Council prohibit law firms from advertising and soliciting work through communication in the public domain. This website is meant solely for the purpose of information and not for the purpose of advertising. Singh Associates does not intend to solicit clients through this website. We do not take responsibility for decisions taken by the reader based solely on the information provided in the website. By continuing to use this website, the visitor acknowledges that the information provided in the website (a) does not amount to advertising or solicitation and (b) is meant only for his/her understanding about our activities and who we are.
                        </p>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="flex justify-end mt-4">
                    <AlertDialogAction asChild>
                       <Button onClick={handleAccept}>I Understand & Continue</Button>
                    </AlertDialogAction>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DisclaimerDialog;
