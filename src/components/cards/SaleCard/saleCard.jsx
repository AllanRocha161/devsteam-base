import Image from "next/image"

import styles from './saleCard.module.css'

import Button from '@/components/forms/button/button'

export default function SaleCard({ image, discount, fullPrice, discoutPrice, onAdd }) {
    return ( 
        <div className={styles.saleCard}>
            <Image src={`/products/${image}`} alt={`{Produto ${image}`} width={250} height={300} />
            <div className={styles.info}>
                <h3 className={styles.title}>Oferta Exclusiva</h3>
                <div className={styles.pricecard}>
                    <div className={styles.percent}>-{discount}</div>
                    <div className={styles.price}>
                        <p className={styles.fullprice}>R${fullPrice}</p>
                        <h4 className={styles.discountprice}>R${discoutPrice}</h4>
                    </div>
                </div>
                <Button fullWidth onClick={onAdd}>Adicionar ao Carrinho</Button>
            </div>
        </div>
    )    
}

SaleCard.defaultProps = {
    image: "league-of-legends.jpg",
    discount: '90%',
    fullPrice: "199,90",
    discoutPrice: "57,90"
}