import React from 'react'
import {
    Box,
    Grid,
    TextField,
    Button,
    Card,
    CardContent,
    Typography,
} from "@material-ui/core";
export const Replies = () => {
    return (
        <div>
            <Grid>
                <Card style={{ maxWidth: 10000, padding: "20px 5px", margin: " 90px auto" }}>
                    <CardContent>
                        <Typography style={{ bgcolor: "info" }} gutterBottom variant="h5">
                            yo it's micky
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            gutterBottom
                        >
                            cool
                        </Typography>
                        <Box
                            m={1}
                            display="flex"
                            justifyContent="flex-end"
                            alignItems="flex-end"
                            sx={"boxDefault"}
                        >
                            <Grid item xs={12} >
                                <TextField
                                    name="name"
                                    placeholder="Enter name"
                                    label="Comment"
                                    variant="outlined"
                                    fullWidth
                                    required

                                />
                            </Grid>
                            <Button variant="outlined" color="primary" sx={{ height: 40 }}>
                                REPLY
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}
