import React from 'react'
import Button from "../components/Button"

const Buttons = () => {
    return (
        <section className="buttons-container"> 
                 <span className="buttons-tag">
                    {'<Button color="default || primary || secondary || danger" />'}
                 </span>
                <Button text='Default' color='default'/>
                <Button text='Default' color='primary'/>
                <Button text='Default' color='secondary'/>
                <Button text='Default' color='danger'/>
                <span className="buttons-tag">
                    {'<Button variant=”outline” />'}
                 </span>
                <Button variant='outline' text='Default' color='default' />
                <Button variant='outline' text='Default' color='primary' />
                <Button variant='outline' text='Default' color='secondary' />
                <Button variant='outline' text='Default' color='danger' />
                <span className="buttons-tag">
                    {'<Button variant=”text” />'}
                 </span>
                 <Button variant='text' disableShadow text='Default' color='default' />
                 <Button variant='text' disableShadow text='Default' color='primary' />
                 <Button variant='text' disableShadow text='Default' color='secondary' />
                 <Button variant='text' disableShadow text='Default' color='danger' />
                 <span className="buttons-tag">
                    {'<Button disableShadow />'}
                 </span>
                 <Button text='Default'  disableShadow color='default'/>
                 <Button text='Default'  disableShadow color='primary'/>
                 <Button text='Default' variant='outline'  disableShadow color='secondary'/>
                 <Button text='Default' variant='outline'  disableShadow color='danger'/>
                 <span className="buttons-tag">
                    {'<Button disabled />'}
                    </span>
                 <Button text='Default' disabled  color='default'/>
                 <Button text='Default' variant='text' disableShadow disabled  color='primary'/>
                 <Button text='Default' variant='outline' disabled  disableShadow color='secondary'/>
                 <Button text='Default' variant='outline' disabled   color='danger'/>
                 <span className="buttons-tag">
                    {'<Button startIcon=”local_grocery_store” />'}
                    </span>
                    <Button startIcon='local_grocery_store' text='Default' color='default'/>
                <Button text='Default' startIcon='local_grocery_store' color='primary'/>
                <Button startIcon='local_grocery_store' text='Default' color='secondary'/>
                <Button text='Default' startIcon='local_grocery_store' color='danger'/>
                <span className="buttons-tag">
                    {'<Button endIcon=”local_grocery_store” />'}
                    </span>
                    <Button variant='text' endIcon='local_grocery_store' text='Default' color='default'/>
                <Button variant='text' text='Default' endIcon='local_grocery_store' color='primary'/>
                <Button variant='outline'  endIcon='local_grocery_store' text='Default' color='secondary'/>
                <Button variant='outline' text='Default' endIcon='local_grocery_store' color='danger'/>
                <span className="buttons-tag">
                    {'<Button size=”sm || md || lg” />'}
                    </span>
                <Button  size='sm' text='Default' color='default'/>
                <Button  size='md' text='Default' color='primary'/>
                <Button  size='lg' text='Default' color='secondary'/>
            </section>
    )
}

export default Buttons
