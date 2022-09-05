import React from 'react'
import { connect } from 'react-redux'
import { getCatalog } from '../../redux/catalog-reducer'
import { AppStateType } from '../../redux/redux-store'
import { FormDataType } from '../../types/types'
import Search from './Search'

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    getCatalog: (formData: FormDataType, startIndex: number) => void
}

const SearchContainer: React.FC<MapPropsType & DispatchPropsType> = (props) => {

    return <Search getCatalog={props.getCatalog} />
}

const mapStateToProps = (state: AppStateType) => ({

})

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, { getCatalog })(SearchContainer)