import React,{useEffect,useState} from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './App'
import CssBaseline from '@material-ui/core/CssBaseline';



function Index2() {
    const [x, setX] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches)
    const theme = createMuiTheme({
        palette: {
          type: x?"dark":"light",
        }
    });
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    setX(event.target.matches)
    });
    useEffect(() => {
        
    }, [x])
    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                    <App themepal={theme} theme={window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}/>
            </ThemeProvider>
        </div>
    )
}

export default Index2
