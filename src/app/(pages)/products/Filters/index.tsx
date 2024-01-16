'use client'

import React from 'react'

import classes from './index.module.scss'
import { useFilter } from '../../../_providers/Filter'
import { Category } from '../../../../payload/payload-types'
import { Checkbox } from 'payload/components/forms'


const Filters = ({categories}: {categories: Category[]}) => {
  return (
    const { categoryFilters, sort, setCategoryFilters, setSort } = useFilter()

    const handleCategories = (categoryId: string) => {

    }
    <div className={classes.filter}>
      <div>
        <h6 className={classes.title}>Product Categories</h6>
        <div className={classes.categories}></div>
        {categories.map(category => {
          const isSelected = false

          return (
            <Checkbox key={category.id} label={category.title} />
          )
        })}
      </div>
    </div>
  )
}

export default Filters