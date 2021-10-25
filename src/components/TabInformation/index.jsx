import React from 'react';
import PharmacologicalGroup from '../PharmacologicalGroup';
import MedicalComposition from '../MedicalComposition';
import MedicalInputs from '../MedicalInputs';
import TypeMedical from '../TypeMedical';

export default function TabInformation({ drugData }) {
  const medicalInputs = ['Dipirona', 'Isometepteno', 'Cafeína'];
  const group = ['Analgésico', 'Miorrelaxantes (Relaxante muscular)'];

  return (
    <>
      <MedicalComposition name={drugData.description} />

      <TypeMedical selected={drugData.type ?? 1} />

      <MedicalInputs inputsMedical={drugData.medicalInputs ?? medicalInputs} />

      <PharmacologicalGroup group={drugData.group ?? group} />
    </>
  );
}
