import Button from '@restart/ui/esm/Button';
import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-info">
            <footer>
               <center>
                   <div>
                            <div>
                                <h1>Contact Us</h1>
                                <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
                            </div>
                            <div>
                            <InputGroup className="mb-3">
                                    <FormControl
                                    placeholder="Enter Your Email"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    />
                                    <Button variant="outline-secondary" id="button-addon2">
                                    Button
                                    </Button>
                                    </InputGroup>
                            </div>
                            <div>
                                  <p>Copy Right</p>

                            </div>
                   </div>
                   
                   
                   
                   
                   
                   
             </center> 

            </footer>
        </div>
    );
};

export default Footer;