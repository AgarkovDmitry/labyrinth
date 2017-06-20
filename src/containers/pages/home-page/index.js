import React from 'react'
import AddOrderForm from 'containers/forms/create-order-form'
import { Presentation, Group } from 'components/presentation'

const bgstyles = {
  chocolate: { backgroundColor: 'chocolate' },
  coral: {
    // transition: 'all 1000ms ease',
    // y: '-100vh',
    // position: 'absolute',
    // transform: 'translateY(0vh)',
    backgroundColor: 'coral'
  },
  cornflowerblue: { backgroundColor: 'cornflowerblue' },
  crimson: { backgroundColor: 'crimson' },
  darkgoldenrod: { backgroundColor: 'darkgoldenrod' },
  dodgerblue: { backgroundColor: 'dodgerblue' },
  burlywood: { backgroundColor: 'burlywood' },
}

const page = () =>
    <Presentation navButtons>
      <section style={bgstyles.chocolate}>Page 1</section>
      <section style={bgstyles.coral}>Page 2</section>
      <section style={bgstyles.cornflowerblue}>Page 3</section>
      <Group defaultIndex={1}>
        <section style={bgstyles.crimson}>Page4-1</section>
        <section style={bgstyles.darkgoldenrod}>Page4-2</section>
        <section style={bgstyles.chocolate}>Page4-3</section>
      </Group>
      <section style={bgstyles.dodgerblue}>Page 5</section>
      <section style={bgstyles.burlywood}><AddOrderForm/></section>
    </Presentation>

export default page
