
import React, { unstable_Suspense as Suspense } from 'react'
import axios from 'axios'

import { Section } from 'Atoms'
import { TitleList, Title } from './Atoms'

const cache = {}
const API_URL = 'https://hoopla-ws-dev.hoopladigital.com/kinds/7/titles/featured?offset=0&limit=51&kindId=7'
const HEADER_KEY = 'ws-api'
const HEADER_VALUE = '2.1'

async function getTitles () {
  const { data } = await axios.get(API_URL, {
    headers: {
      [HEADER_KEY]: HEADER_VALUE
    }
  })
  return data
}

function FetchTitles () {
  const data = cache.data
  if (!data) {
    const promise = getTitles().then(data => (cache.data = data))
    throw promise
  }
  return <RenderTitles {...data} />
}

function RenderTitles (titles) {
  return (
    <TitleList>
      {titles && Object.values(titles).map(title => <Title key={title.titleId} {...title} />)}
    </TitleList>
  )
}

export function Home () {
  return (
    <Section>
      <Suspense fallback='loading title data...'>
        <FetchTitles />
      </Suspense>
    </Section>
  )
}
