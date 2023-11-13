import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import { Layout } from './layout/Layout'
import Pages from './Pages'

function HW5() {
    return (
        <BrowserRouter>
            <Layout>
                <Pages />
            </Layout>
        </BrowserRouter>
    )
}

export default HW5
