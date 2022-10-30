import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'flag-icon-css/css/flag-icons.min.css';
import 'bootstrap/dist/js/bootstrap.js'
//import './index.css'
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs:['en','zh','hi','es','fr','ar','bn','ru','pt','ur','id','de','ja'],
    fallbackLng:"en",
    debug: false,
    detection:{
      order:['path','cookie','htmlTag'],
      caches:['cookie'],
    },
    backend:{
      loadPath:'/translation/{{lng}}.json',
    },
  })
const loadingMarkup = (
  <div className="py-4 text-center">
    <h1>~ Loading ~</h1>
  </div>
)
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Suspense>
);