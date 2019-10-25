export default function formatPrice({ price }) {
  const money = price.split(',').join('');

  if (money.length < 7) return `${money.substr(0, 3)}K`;
  if (money.length === 7) {
    const thousand = price.split(',');
    if (thousand[1][0] !== '0' || thousand[1][1] !== '0')
      return `${money.charAt(0)}.${money.substr(1, 3)}M`;
    return `${money.charAt(0)}M`;
  }
  if (money.length > 7) return `${money.substr(0, money.length - 6)}M`;
}

export const formatToolTipPrice = price => {
  const money = price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

  return `${money.substr(0, money.length - 3).slice(0, -1)}M`;
};
