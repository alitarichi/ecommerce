import React from 'react'

import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import Image from 'next/image'
import Link from 'next/link'

import classes from './index.module.scss';
import { HeaderNav } from '../Nav'
import MobileNav from '../MobileNav'

const HeaderComponent = ({ header}: { header: Header}) => {
  return (
    <nav className={[classes.header]}>
        <Gutter className={[classes.wrap]}>
            <Link href='/'>
                <Image src='/logo-black.svg' alt='logo' width={170} height={50} />
            </Link>
            <HeaderNav header={header}/>
            <MobileNav header={header} />
        </Gutter>
    </nav>
  )
}

export default HeaderComponent