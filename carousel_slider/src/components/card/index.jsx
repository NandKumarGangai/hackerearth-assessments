import currencyToSymbolMap from 'currency-symbol-map';
import './style.scss';

const ProductCard = ({
  productImageUrl,
  productImageAltText,
  name,
  salesUnit,
  price: { currency, formattedValue },
  activePromotionLabels = [],
}) => (
  <>
    <div className='card'>
      <div className='sect'>
        <img
          className='card-img'
          src={productImageUrl}
          alt={productImageAltText}
        />
      </div>
      <div className='sect'>
        <h2 className='name'>{name}</h2>
        <ul className='legend'>
          {activePromotionLabels.map(({ code, label }) => {
            return <li key={code}>{label}</li>;
          })}
        </ul>
      </div>
      <div className='sect'>
        <p className='price'>{`${currencyToSymbolMap(
          currency
        )} ${formattedValue}`}</p>
      </div>
      <div className='sect'>
        <p>{`Unit: ${salesUnit}`}</p>
      </div>
      <div className='sect'>
        <p>
          <button>Buy now</button>
        </p>
      </div>
    </div>
  </>
);

export default ProductCard;
