import React, { Suspense, createContext, useReducer } from 'react'
import { observer } from 'mobx-react-lite'
import {
  useUpdateAppTitle,
  useUpdateHtmlLangAttr,
  useLoadAppData,
  useSaveAppData,
} from './hooks'
import Loader from './components/Common/Loader'
import Toolbar from './components/Toolbar'
import CV from './pages/CV'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { initialState, reducer } from "./store/reducer";

export const AuthContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useUpdateAppTitle()
  useUpdateHtmlLangAttr()
  useLoadAppData()
  useSaveAppData()

  return (
      <div>
        <AuthContext.Provider
            value={{
              state,
              dispatch
            }}
        >
          <Router>
            <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/" component={Home}/>
            </Switch>
          </Router>
        </AuthContext.Provider>
        <Suspense fallback={<Loader className='app-loader' />}>
          <Toolbar />
          <CV />
        </Suspense>
      </div>
  )
}

export default observer(App)
