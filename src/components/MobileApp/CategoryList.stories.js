import React from 'react'
// import { action } from '@storybook/addon-actions'
import CategoryList from './CategoryList'

export default {
  title: 'MobileApp/Components/CategoryList',
  component: CategoryList
}

const exampleCategories = [
  {
    id: '78920f6d-57c1-5231-b0c4-f58dcddc64cf',
    href: '/app/borrow/categories/78920f6d-57c1-5231-b0c4-f58dcddc64cf',
    caption: 'Audio',
    imgSrc: require('../../static/example-images/categories/5d302b26-5737-48e7-a90d-e65f22d8c065.jpg')
  },
  {
    id: 'b279bb7f-314c-55d1-a407-0de794c2c25e',
    href: '/app/borrow/categories/b279bb7f-314c-55d1-a407-0de794c2c25e',
    caption: 'Beleuchtungstechnik',
    imgSrc: require('../../static/example-images/categories/2b4c8bd3-3d65-5e68-bf7a-3649ec67a1a2.jpg')
  },
  {
    id: '298ec3da-d2c8-5d9d-ae1a-55715ccd933c',
    href: '/app/borrow/categories/298ec3da-d2c8-5d9d-ae1a-55715ccd933c',
    caption: 'Effektgeräte Veranstaltungstechnik',
    imgSrc: require('../../static/example-images/categories/fdfb06be-9bfc-5377-a82b-5d9fb0cc28fb.jpg')
  },
  {
    id: 'c6a221ec-6df2-5ce7-b9a0-cc5694902353',
    href: '/app/borrow/categories/c6a221ec-6df2-5ce7-b9a0-cc5694902353',
    caption: 'Externe Massenspeicher',
    imgSrc: null
  },
  {
    id: '3f69bb3b-8934-589c-8d96-69f3ce31416e',
    href: '/app/borrow/categories/3f69bb3b-8934-589c-8d96-69f3ce31416e',
    caption: 'Fotografie',
    imgSrc: require('../../static/example-images/categories/286f85ba-e1a1-5c36-b03b-cf443f81d77d.jpg')
  },
  {
    id: 'ddaa15fc-eb63-5c5b-a5a1-9553c9070ab7',
    href: '/app/borrow/categories/ddaa15fc-eb63-5c5b-a5a1-9553c9070ab7',
    caption: 'IT & Elektronik',
    imgSrc: require('../../static/example-images/categories/444a201c-198a-5bb1-8745-be75dffd7aa9.jpg')
  },
  {
    id: '82165b56-aa9e-5d6a-b37c-f446cda4004e',
    href: '/app/borrow/categories/82165b56-aa9e-5d6a-b37c-f446cda4004e',
    caption: 'Musikinstrumente & Zubehör',
    imgSrc: require('../../static/example-images/categories/d5a8e40e-7890-5dde-9fb6-8317bac31b72.jpg')
  },
  {
    id: 'de4904f9-e6ae-5fc5-9ca5-c2e1adc81fdc',
    href: '/app/borrow/categories/de4904f9-e6ae-5fc5-9ca5-c2e1adc81fdc',
    caption: 'Präsentationstechnik',
    imgSrc: require('../../static/example-images/categories/57a9b58a-4bdb-5929-ab8f-12f9ecddfb27.jpg')
  },
  {
    id: '39d77309-8540-5fa0-a0ac-9f7bd1ea4dce',
    href: '/app/borrow/categories/39d77309-8540-5fa0-a0ac-9f7bd1ea4dce',
    caption: 'Rig & Bühnentechnik',
    imgSrc: require('../../static/example-images/categories/9e0724eb-b68f-5281-abfd-397ca5f3735a.jpg')
  },
  {
    id: 'dd596b8e-ce2b-59a1-95d6-124ee8339171',
    href: '/app/borrow/categories/dd596b8e-ce2b-59a1-95d6-124ee8339171',
    caption: 'Stative',
    imgSrc: require('../../static/example-images/categories/0186eae8-5ec0-5bff-b3d6-3c42aeb966b9.jpg')
  },
  {
    id: '56336471-2ce5-541c-be64-7fdb891f49f5',
    href: '/app/borrow/categories/56336471-2ce5-541c-be64-7fdb891f49f5',
    caption: 'Video',
    imgSrc: require('../../static/example-images/categories/9029dfa3-2691-5b73-94e0-785c5b0019a7.jpg')
  }
]

export const Example1 = () => (
  <div className="mx-1 mt-2">
    <CategoryList list={exampleCategories.slice(0, 4)} />
  </div>
)
Example1.story = { name: '2x2 grid' }

export const Example2 = () => (
  <div className="mx-1 mt-2">
    <CategoryList list={exampleCategories} />
  </div>
)
Example2.story = { name: 'full list' }
