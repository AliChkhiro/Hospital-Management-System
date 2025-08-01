package com.hms.user.Exception;

public class HmsException extends Exception{
    private static final long serialVersionUID = 1L;

    // Identifiant de version pour la sérialisation de cette classe (utile si elle est envoyée sur un réseau ou sauvegardée)
    public HmsException(String message){
        super(message);
    }
}
