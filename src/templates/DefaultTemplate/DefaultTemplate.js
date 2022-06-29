import React, { Fragment } from 'react'
import FooterTemplate from './FooterTemplate/FooterTemplate'
import HeaderTemplate from './HeaderTemplate/HeaderTemplate'

export default function DefaultTemplate({ children }) {
    return (
        <Fragment>
            <HeaderTemplate />
            <div>{children}</div>
            <FooterTemplate />
        </Fragment>
    )
}
