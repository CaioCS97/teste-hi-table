//React Imports
import React, { useState, useEffect } from 'react';

//Material UI Imports
import { Card, Link, CardContent, Chip, Dialog } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Service Imports
import { getUserInfo } from 'config/helpers';
import { workDaysServices, establishmentBusinessHoursServices } from 'services';

//Styled Component Imports
import EditIcon from 'assets/images/edit.svg';
import { Content } from 'assets/styles/components/Holidays';
import { Title, ContainerFlex } from '../../../assets/styles/components/WorkDays'

//Other Imports
import { WorkDaysForm } from '..';

const useStyles = makeStyles(theme => ({
    card: {
        marginBottom: 10
    },
}));

const BusinessHoursCard = (props) => {
    //React Hooks
    const [workDays, setWorkDays] = useState([])
    const [businessHours, setBusinessHours] = useState([])
    const [openDialog, setOpenDialog] = useState(false)

    useEffect(() => {
        loadBusinessHours();
    }, [])

    //Style definitions
    const classes = useStyles();

    //Functions and Event Handlers
    const loadBusinessHours = () => {
        workDaysServices.get()
            .then(response => {
                setWorkDays(response)
            })

        const id = getUserInfo().idEstablishment;

        establishmentBusinessHoursServices.getBusinessHours(id)
            .then(response => {
                setBusinessHours(response.data)
            })
    }

    const handleSuccess = () => {
        loadBusinessHours()
        setOpenDialog(false)
    }

    return (
        <Card className={classes.card}>
            <CardContent>
                <Title>
                    <h3>Funcionamento</h3>
                    <Link
                        component="button"
                        variant="button"
                        onClick={() => {
                            setOpenDialog(true)
                        }}>
                        <img src={EditIcon} />
                    </Link>
                </Title>
                <Content>
                    <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</span>
                </Content>
            </CardContent>
            <div>
                {
                    workDays.map((wd, index) => {
                        return <>
                            <ContainerFlex key={index} style={{ backgroundColor: index % 2 == 0 ? "#f7f7f7" : "#fff" }}>
                                <h4>{wd.weekDayName}</h4>
                                <div>
                                    {
                                        !businessHours.some(bh => bh.dayOfWeek == wd.weekDay)
                                            ? <span>Sem funcionamento</span>
                                            : <div>
                                                {
                                                    businessHours
                                                        .filter(bh => {
                                                            return bh.dayOfWeek == wd.weekDay
                                                        })
                                                        .map((bh, index) => {
                                                            return <p key={index} style={{ textAlign: 'right' }}>
                                                                <Chip label={bh.start + " às " + bh.end} />
                                                            </p>
                                                        })
                                                }
                                            </div>
                                    }
                                </div>
                            </ContainerFlex>

                        </>
                    })
                }
            </div>
            <Dialog open={openDialog}>
                <WorkDaysForm
                    showCancelLink={false}
                    submitButtonText="concluir"
                    handleSuccess={handleSuccess}
                />
            </Dialog>
        </Card>
    )
}

export default BusinessHoursCard;