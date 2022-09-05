import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Catalog.module.css'
import Preloader from '../common/Preloader'
import preloader from '../../assets/preloader.png'
import imgPlug from '../../assets/no_cover_available.jpg'
import { ItemType } from '../../types/types'

export type MapPropsType = {
    items: Array<ItemType>
    totalItems: number | null
    isFetching: boolean
    isFetchingButton: boolean
}

export type DispatchPropsType = {
    onLoadMore: () => void
}

const Catalog: React.FC<MapPropsType & DispatchPropsType> = (props) => {

    return <>
        {props.totalItems !=null && <div className={styles.container}>
            {<div className={styles.results}>{props.totalItems === 0 ? <span>No results found</span> :
                <span>Found {props.totalItems} results</span>}</div>}
            {props.totalItems > 0 && <div className={styles.items}>{props.items && props.items.map((item, index) => {
                return <NavLink className={styles.item} to={`/book/${item.id}`} key={item.id + index}>
                    <div className={styles.image_container}>
                        <img src={item.volumeInfo?.imageLinks?.thumbnail ? item.volumeInfo?.imageLinks?.thumbnail : imgPlug} alt='no cover available' />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.category}>{item.volumeInfo.categories?.[0]}</div>
                        <div className={styles.title}>{item.volumeInfo.title}</div>
                        <div className={styles.authors}>{item.volumeInfo.authors && item.volumeInfo.authors.map(author => {
                            return <span key={author}>{author}</span>
                        })}</div>
                    </div>
                </NavLink>
            })} </div>}
             {((props.totalItems > 0) && (props.totalItems !== props.items.length)) &&<span className={`${styles.loadMore} ${props.isFetching ? styles.active : ''}`} onClick={props.onLoadMore}>{props.isFetching ? <img src={preloader}/> : 'Load More'}</span>}
        </div>}
        {!props.isFetchingButton && (props.isFetching && <Preloader />)}
    </>
}

export default Catalog