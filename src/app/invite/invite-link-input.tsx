'use client'

import IconButton from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { Copy, Link } from 'lucide-react'
import React from 'react'

interface InviteLinkProps{
  inviteLink: string;
}

export default function InviteLinkInput({inviteLink}:InviteLinkProps) {

  function copyInviteLink(){
    navigator.clipboard.writeText(inviteLink)
    alert('Link copiado para a área de transferência!')
  }
  return (
    <InputRoot>
    <InputIcon>
      <Link className="size=5"/>
    </InputIcon>

    <InputField
      readOnly
      defaultValue={inviteLink}
    />
    <IconButton className="-mr-2" onClick={copyInviteLink}>
      <Copy className="size-5"/>
    </IconButton>
  </InputRoot>
  )
}
