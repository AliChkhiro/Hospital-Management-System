package com.hms.profile.entity;


import java.time.LocalDate;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.hms.profile.dto.BloodGroup;
import com.hms.profile.dto.PatientDTO;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(unique = true)
    private String email;
    private LocalDate dob;
    private String phone;
    private String address;
    @Column(unique = true)
    private String cniNo;
    private BloodGroup bloodGroup;
    private String allergies;
    private String chronicDisease;

    public PatientDTO toDTO() {
        return new PatientDTO(this.id, this.name, this.email, this.dob, this.phone, this.address, this.cniNo, 
        this.bloodGroup, this.allergies, this.chronicDisease);
    }



    


}
