export type CoinBadgeProps = {
  coins: number
}

export const CoinBadge = ({ coins }: CoinBadgeProps): React.JSX.Element => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs">
      <span>Coins</span>
      <span className="font-semibold">{coins}</span>
    </div>
  )
}
