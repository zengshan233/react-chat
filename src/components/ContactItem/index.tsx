import React, { CSSProperties } from 'react'
import './style.css'
import cns from '../../utils/toClass'
import { IContactItem } from '../../types'

export default function ContactItem(props: IContactItem) {
  return (
    <div
      style={props.styles}
      className={`contact_item_content ${props.border ? 'bottom_border' : ''} ${props.selected ? 'selected' : ''}`}
      onClick={props.onClick && props.onClick.bind(null, props.contact)}>
      <img className='icon' src={props.contact?.avatar} />
      <div className='info_area'>
        <span className='nickname ellipsis'>{props.contact?.nickname}</span>
        <span className='desc ellipsis'>{props.contact?.message}</span>
      </div>
      <span className='date_area'>{props.contact?.date}</span>
    </div>
  )
}

ContactItem.defaultProps = {
  onClick: () => { },
}
