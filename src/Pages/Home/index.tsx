import React, { useState } from "react"

import styled from "styled-components"

import NewNote from "../../Components/NewNote"
import { ListItemType } from "../../types"

const HomeContainer = styled.div`
    padding-top: 4rem;
    .new-note {
        position: fixed;
        margin-left: 25%;
    }
`

const Home: React.FC = () => {
    const [isChecklist, setIsChecklist] = useState(false)
    const [title, setTitle] = useState("")
    const [listItems, setListItems] = useState<ListItemType[]>([{ value: "", checked: false }])
    return (
        <HomeContainer>
            <section className="new-note w-100">
                <NewNote
                    isChecklist={isChecklist}
                    handleCheckbox={setIsChecklist}
                    title={title}
                    setTitle={setTitle}
                    listItems={listItems}
                    setListItems={setListItems}
                />
            </section>
        </HomeContainer>
    )
}

export default Home
