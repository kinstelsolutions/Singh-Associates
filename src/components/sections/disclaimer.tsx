'use client';
import React, { useState } from 'react';
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
    const [isOpen, setIsOpen] = useState(true);

    const handleAccept = () => {
        setIsOpen(false);
    };

    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <AlertDialogContent className="bg-background border-border">
                <AlertDialogHeader className="text-center">
                    <AlertDialogTitle className="font-headline text-2xl text-primary">Disclaimer</AlertDialogTitle>
                    <AlertDialogDescription asChild>
                        <div className="text-muted-foreground text-sm max-h-[60vh] overflow-y-auto text-center">
                        <p className="mt-4">
                            The rules of the Indian Bar Council prohibit law firms from advertising and soliciting work through communication in the public domain. This website is meant solely for the purpose of information and not for the purpose of advertising. Singh Associates does not intend to solicit clients through this website. We do not take responsibility for decisions taken by the reader based solely on the information provided in the website. By continuing to use this website, the visitor acknowledges that the information provided in the website (a) does not amount to advertising or solicitation and (b) is meant only for his/her understanding about our activities and who we are.
                        </p>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="flex justify-center mt-4">
                    <AlertDialogAction asChild>
                       <Button onClick={handleAccept}>I Understand & Continue</Button>
                    </AlertDialogAction>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DisclaimerDialog;
