import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getCatalog } from '../../redux/catalog-reducer'
import { AppStateType } from '../../redux/redux-store'
import { FormDataType } from '../../types/types'
import Catalog from "./Catalog"

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    getCatalog: (formData: FormDataType, startIndex: number) => void
}


const CatalogContainer: React.FC<MapPropsType & DispatchPropsType> = (props) => {

    const [isFetchingButton, setIsfetchingButton] = useState(false)

    const onLoadMore = () => {
        props.getCatalog(props.formData, props.startIndex + props.maxResults)
        setIsfetchingButton(true)
    }

    return <Catalog items={props.items}
        totalItems={props.totalItems}
        isFetching={props.isFetching}
        onLoadMore={onLoadMore}
        isFetchingButton={isFetchingButton} />
}

const mapStateToProps = (state: AppStateType) => ({
    items: state.Catalog.items,
    totalItems: state.Catalog.totalItems,
    startIndex: state.Catalog.startIndex,
    maxResults: state.Catalog.maxResults,
    formData: state.Catalog.formData,
    isFetching: state.Catalog.isFetching
})

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, { getCatalog })(CatalogContainer)