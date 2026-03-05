import type { PetState } from '@renderer/shared/types'
import { CoinBadge } from './CoinBadge'

export type PetCardProps = {
  pet: PetState
}

export const PetCard = ({ pet }: PetCardProps): React.JSX.Element => {
  return (
    <div className="rounded border border-border p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-medium">Nimbus the Fox</div>
          <div className="text-xs text-slate-500">Mood: Curious</div>
        </div>
        <CoinBadge coins={pet.coins} />
      </div>
      <div className="mt-4 text-sm text-slate-500">TODO: Pet perks + rewards list</div>
    </div>
  )
}
