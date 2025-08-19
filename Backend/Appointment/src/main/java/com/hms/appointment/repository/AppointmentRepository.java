package com.hms.appointment.repository;

import org.springframework.data.repository.CrudRepository;

import com.hms.appointment.entity.Appointment;

public interface AppointmentRepository extends CrudRepository<Appointment, Long> {
    // Additional query methods can be defined here if needed
    
}
