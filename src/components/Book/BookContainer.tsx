import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom';
import { getBook } from '../../redux/book-reducer'
import { AppStateType } from '../../redux/redux-store';
import Book, { MapPropsType } from "./Book"


type DispatchPropsType = {
    getBook: (volumeId: string) => void
}

type PathParamsType = {
    volumeId: string
}

type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>

const BookContainer: React.FC<PropsType> = (props) => {
    useEffect(() => {
            props.getBook(props.match.params.volumeId)
        
    }, [])

    return <Book book={props.book} isFetching={props.isFetching} />
}

const mapStateToProps = (state: AppStateType) => ({
    book: state.Book.book,
    isFetching: state.Book.isFetching
})

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, { getBook })(BookContainer)