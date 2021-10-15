import React from 'react';
import PharmacologicalGroup from '../PharmacologicalGroup';
import MedicalComposition from '../MedicalComposition';
import MedicalInputs from '../MedicalInputs';
import TypeMedical from '../TypeMedical';

export default function TabInformation({ medicalInputs, group }) {
  return (
    <>
      <MedicalComposition />

      <TypeMedical />

      <MedicalInputs inputsMedical={medicalInputs} />

      <PharmacologicalGroup group={group} />
    </>
  );
}
