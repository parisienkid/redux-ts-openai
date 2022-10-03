import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../core/store';
import styled, {css} from 'styled-components';
import { Sword, String } from '../../ApiPageMain';
import { CodeBlock } from '../../ApiPageMain';



const TabsContent = styled.div`
    box-shadow: 0 0 10px rgb(0 0 0 / 5%);
    border-radius: 6px;
    background-color: #fff;
    padding: 53px 41px;
    color: #000;
`

const TabsWrapper = styled.div`
    margin-top: 40px;
` 

interface ITabsP {
    color?: string
    code?: boolean
}

const TabsP = styled.p<ITabsP>`
    font-family: ColfaxAI,Helvetica,sans-serif;
    ${props => props.code && css`
        font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
    `}
    color: ${props => props.color};
    white-space: pre-wrap;
`

interface IApiTabsContent {
    nameOfTab: string
}

const ApiTabsContent: FC<IApiTabsContent> = ({nameOfTab}) => {

    const {tabs} = useSelector((state: RootState) => state.api);
    const currentTabs = nameOfTab === 'gpt' ? tabs.gpt3ActiveTab : nameOfTab === 'codex' ? tabs.codexActiveTab : 1;



    const changeTabsContent = (nameOfTab: string, activeTab: number) => {
        switch (nameOfTab) {
            case ('gpt'):
                switch (activeTab) {
                    case (1):
                        return (
                            <TabsContent>
                                <TabsP>Create promo copy for the FamilyTime mobile application. It allows unlimited uploading, special filters and makes it easy to create albums of photos and videos. It runs on iOS and Android:</TabsP>
                                <br></br>
                                <String typing delay='.5s'  bold  ff="SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;">FamilyTime is a free, unlimited photo and video editor</String>
                                <String typing delay='1s'  bold  ff="SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;">that allows you to create albums of your memories.</String>
                                <String typing delay='1.5s'  bold  ff="SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;">It has a special filter for the perfect summer look</String>
                                <String typing delay='2s'  bold  ff="SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;">and is so simple to use.</String>
                            </TabsContent>
                        )
                    case (2):
                        return (
                            <TabsContent>
                                <TabsP>Summarize this email into a single sentence:</TabsP>
                                <br></br>
                                <TabsP>Dear Olivia,</TabsP>
                                <br></br>
                                <TabsP>The solar energy conference went great. New Horizon Manufacturing wants to meet with us to talk about our photovoltaic window system we’re about to launch.</TabsP>
                                <TabsP>I think it would be great to talk this Tuesday.</TabsP>
                                <br></br>
                                <TabsP>Best,</TabsP>
                                <TabsP>Allison</TabsP>
                                <br></br>
                                <String typing delay='.5s' bold ff="SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;">Allison is excited to meet with New Horizon Manufacturing</String>
                                <String typing delay='1s' bold ff="SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;">to discuss their photovoltaic window system.</String>
                            </TabsContent>
                        )
                        case (3):
                            return (
                                <TabsContent>
                                    <TabsP>Summarize this email into a single sentence:</TabsP>
                                    <br></br>
                                    <TabsP>I’m wondering if you could provide me with information about your cloud services for companies.</TabsP>
                                    <TabsP>I’m CTO for Moon Door, a movie production company and want to know if it can help us manage our different projects that are in production.</TabsP>
                                    <br></br>
                                    <TabsP>Questions:</TabsP>
                                    <TabsP>1. What industry is the company</TabsP>
                                    <TabsP>2. What is the name of the company</TabsP>
                                    <TabsP>3. What are they interested in</TabsP>
                                    <TabsP>4. What is the customer’s position</TabsP>
                                    <br></br>
                                    <TabsP>Answers:</TabsP>
                                    <br></br>
                                    <String typing delay='.5s'  bold ff="SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;">1. The company is in the movie production industry.</String>
                                    <String typing delay='1s'  bold ff="SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;">2. The company is Moon Door.</String>
                                    <String typing delay='1.5s'  bold ff="SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;">3. The customer is interested in cloud services for companies.</String>
                                    <String typing delay='2s'  bold ff="SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;">4. The customer is the CTO.</String>
                                </TabsContent>
                            )
                            case (4):
                                return (
                                    <TabsContent>
                                        <TabsP>Choose a genre category for each book 1. The Hunger Games, 2. The Kite Runner 3. A Wrinkle in Time (“fiction”, “young adult”, “science fiction”, “fantasy”, “other”) and make a list of the book and its genre:</TabsP>
                                        <br></br>
                                        <String typing delay='.5s' bold ff="SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;">1. The Hunger Games: young adult, fiction</String>
                                        <String typing delay='1s' bold ff="SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;">2. The Kite Runner: fiction, young adult</String>
                                        <String typing delay='1.5s' bold  ff="SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;">3. A Wrinkle in Time: science fiction, fantasy, other</String>
                                    </TabsContent>
                                )
                            case (5):
                                return (
                                    <TabsContent>
                                        <TabsP>Translate this into French: Where can I find a bookstore?</TabsP>
                                        <br></br>
                                        <String typing delay='.5s' bold ff="SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;">Où puis-je trouver un magasin de livres?</String>
                                    </TabsContent>
                                )
                }
                break
            case ('codex'):
                switch (activeTab) {
                    case (1):
                        return (
                            <CodeBlock width="100%" padding="30px" margin="40px 0 0 0">
                                <String color='#a3a3a8' width='100%'>"""</String>
                                <String color='#a3a3a8' prewrap width='100%'>Table customers, columns = [CustomerId, FirstName, LastName, Company, Address, City, State, Country, PostalCode, Phone, Fax, Email, SupportRepId, TotalSpend]</String>
                                <br></br>
                                <String color='#a3a3a8' prewrap width='100%'>Create a MySQL query for all customers in Texas who have spent over five thousand dollars.</String>
                                <String color='#a3a3a8' width='100%'>"""</String>
                                <br></br>
                                <br></br>
                                <String typing delay='1s' color='#fff'>query = <Sword green>"SELECT * FROM customers WHERE State = 'TX' AND TotalSpend &gt; 5000"</Sword></String>
                            </CodeBlock>
                        )
                    case (2):
                        return (
                            <CodeBlock width="100%" padding="30px" margin="40px 0 0 0">
                                <String color='#a3a3a8' width='100%'>"""</String>
                                <String color='#a3a3a8' prewrap width='100%'>Python 3</String>
                                <String color='#a3a3a8' prewrap width='100%'>Get the current value of a Bitcoin in US dollars using the bitcoincharts api</String>
                                <String color='#a3a3a8' width='100%'>"""</String>
                                <br></br>
                                <String typing delay='.5s' color='#fff'><Sword blue>import</Sword><Sword> request</Sword></String>
                                <String typing delay='1s' color='#fff'><Sword blue>import</Sword><Sword> json</Sword></String>
                                <br></br>
                                <String typing delay='1.5s' color='#fff'><Sword blue>def</Sword><Sword red> get_bitcoin_price</Sword>():</String>
                                <String typing delay='2s' padding='36px' color='#fff'><Sword>url =</Sword><Sword green> 'http://api.bitcoincharts.com/v1/weighted_prices.json'</Sword>():</String>
                                <String typing delay='2.5s' padding='36px' color='#fff'><Sword >response = requests.get(url)</Sword></String>
                                <String typing delay='3s' padding='36px' color='#fff'><Sword >data = json.loads(response.text)</Sword></String>
                                <String typing delay='3.5s' padding='36px' color='#fff'><Sword blue>return</Sword><Sword> data[</Sword><Sword green>'USD'</Sword><Sword>][</Sword><Sword green>'7d'</Sword><Sword>]</Sword></String>
                                <br></br>
                                <String typing delay='4s' color='#fff'><Sword blue>if</Sword><Sword> __name__ ==</Sword><Sword green>'__main__'</Sword><Sword>:</Sword></String>
                                <String typing delay='4.5s' padding='36px' color='#fff'><Sword blue>print</Sword><Sword> (get_bitcoin_price())</Sword>():</String>
                            </CodeBlock>
                        )
                    case (3):
                        return (
                            <CodeBlock width="100%" padding="30px" margin="40px 0 0 0">
                                <String color='#a3a3a8' width='100%'>"""</String>
                                <String color='#a3a3a8' prewrap width='100%'>Extract all the html from the string and replace the tags with ''</String>
                                <String color='#a3a3a8' width='100%'>"""</String>
                                <br></br>
                                <String typing delay='.5s' color='#fff'><Sword blue>def</Sword><Sword red> extract_html</Sword><Sword>(text):</Sword></String>
                                <String typing delay='1s' padding='36px' color='#fff'><Sword blue>return</Sword><Sword> re.sub(</Sword><Sword green>'&lt;[^&lt;]+?&gt;'</Sword><Sword>, </Sword><Sword green>''</Sword><Sword>, text)</Sword></String>
                            </CodeBlock>
                        )
                }
                break
            default:
                throw new Error();
        }
    }

    return (
       <TabsWrapper>
            {changeTabsContent(nameOfTab, currentTabs)}
       </TabsWrapper>
    )
};

export default ApiTabsContent;