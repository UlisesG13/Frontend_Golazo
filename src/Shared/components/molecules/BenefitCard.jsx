import React from 'react'
import { BenefitIconContainer } from '../atom/BenefitIconContainer'

/**
 * MOLÉCULA: Tarjeta para la sección "Beneficios".
 * Combina BenefitIconContainer, un h3 y un p.
 */
export default function BenefitCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center p-4 text-center">
      <BenefitIconContainer>{icon}</BenefitIconContainer>
      <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}
