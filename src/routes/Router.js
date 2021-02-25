import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '../Views/About'
import Contact from '../Views/Contact'
import Detail from '../Views/Detail'
import Home from '../Views/Home'
import NotFound from '../Views/NotFound'

const Router = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route path='/' exact  component={Home} />
                <Route path='/about'exact component={About} />
                <Route path='/contact'exact component={Contact} />
                <Route path='/detail/:id'exact component={Detail} />
                <Route component={NotFound} />
            </Switch>
        </React.Fragment>
    )
}

export default Router
