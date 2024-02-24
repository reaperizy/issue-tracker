'use client'

import React from 'react'
import { Button, TextField } from '@radix-ui/themes'
import { TextArea } from '@radix-ui/themes'

const NewIssuesPage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root>
            <TextField.Input placeholder='Title'/>
        </TextField.Root>
        <TextArea placeholder="Description" />
        <Button>Submit New Issue</Button>

    </div>
  )
}

export default NewIssuesPage