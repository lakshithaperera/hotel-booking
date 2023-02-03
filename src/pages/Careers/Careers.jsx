import React from "react";
import DragDropFiles from "../../components/DragAndDrop/DragAndDrop";
import { ColorButton } from "../../components/Navbar/Navbar-styled";
import { motion } from "framer-motion";
import { CareersSec, FormHeading } from "./Careers-styled";

export const Careers = () => {
  return (
    <motion.Fragment
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ delay: 0.2, type: "tween", duration: 1 }}
    >
      <CareersSec>
        <motion.div className="wrapper"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 1 }}
        >
          <FormHeading>Apply for Roomista Careers</FormHeading>
          <form action="/">
            <div className="inputs two-inputs">
              <div className="label">
                <label>First Name</label>
                <input type="text" placeholder="your first name" />
              </div>

              <div className="label">
                <label>Last Name</label>
                <input type="text" placeholder="your last name" />
              </div>
            </div>

            <div className="inputs one-inputs">
              <div className="label">
                <label> postal address</label>
                <input type="text" placeholder="Address" />
              </div>
            </div>

            <div className="inputs two-inputs">
              <div className="label">
                <label>Your Email</label>
                <input type="text" placeholder="Email" />
              </div>

              <div className="label">
                <label>re-enter your Email</label>
                <input type="text" placeholder="Confirm Email" />
              </div>
            </div>

            <div className="inputs two-inputs">
              <div className="label">
                <label>Mobile Number</label>
                <input type="text" placeholder="0771966912" />
              </div>

              <div className="label">
                <label>Date of Birth</label>
                <input type="date" />
              </div>
            </div>

            <div className="inputs two-inputs">
              <div className="label">
                <label>Civil Status</label>
                <select id="civistatus" name="civistatus" form="">
                  <option value="">Please Select</option>
                  <option value="">Single</option>
                  <option value="">Married</option>
                  <option value="audi">Other</option>
                </select>
              </div>

              <div className="label">
                <label>Nationality</label>
                <select id="civistatus" name="civistatus" form="">
                  <option value="">Please Select</option>
                  <option value="">Sri Lankan</option>
                  <option value="">Other</option>
                </select>
              </div>
            </div>

            <div className="inputs two-inputs">
              <div className="label">
                <label>Gender</label>
                <select id="civistatus" name="civistatus" form="">
                  <option value="">Please Select</option>
                  <option value="">Male</option>
                  <option value="">Female</option>
                  <option value="">Other</option>
                </select>
              </div>

              <div className="label">
                <label>School attended</label>
                <input type="text" placeholder="O/L and A/L" />
              </div>
            </div>

            <div className="inputs two-inputs">
              <div className="label">
                <label>Current Employment Status?</label>
                <select id="civistatus" name="civistatus" form="">
                  <option value="">Please Select</option>
                  <option value="">Unemployed but i was employed</option>
                  <option value="">Unemployed, No Working experience</option>
                  <option value="audi">Internship</option>
                  <option value="audi">Self Employed</option>
                  <option value="audi">Employed</option>
                </select>
              </div>

              <div className="label">
                <label>Position applied for?</label>
                <select id="civistatus" name="civistatus" form="">
                  <option value="">Please Select</option>
                  <option value="">Tour Executives</option>
                  <option value="">Brand Ambassador</option>
                  <option value="">Software Engineers</option>
                </select>
              </div>
            </div>

            <div className="inputs one-inputs">
              <div className="label">
                <label>
                  Highest qualification completed, and the completion date
                </label>
                <textarea
                  id="qualification"
                  name="qualification"
                  rows="4"
                  cols="50"
                ></textarea>
              </div>
            </div>

            <div className="inputs one-inputs">
              <div className="label">
                <label>Please list any relevant trades or skills</label>
                <textarea
                  id="skills"
                  name="skills"
                  rows="4"
                  cols="50"
                ></textarea>
              </div>
            </div>

            <div className="inputs two-inputs">
              <div className="label">
                <label>Expected monthly salary (LKR)</label>
                <input type="number" />
              </div>

              <div className="label">
                <label>English communication skills?(Verbal & written)</label>
                <select id="civistatus" name="civistatus" form="">
                  <option value="">Please Select</option>
                  <option value="">Basic, Can manage</option>
                  <option value="">Very Good command</option>
                  <option value="">Excellent command</option>
                  <option value="">Near native</option>
                </select>
              </div>
            </div>

            <div className="inputs one-inputs">
              <div className="label">
                <label>Tell us little bit about yourself and family</label>
                <textarea
                  id="skills"
                  name="skills"
                  rows="4"
                  cols="50"
                ></textarea>
              </div>
            </div>

            <div className="inputs one-inputs">
              <div className="label">
                <label>What would you consider a weakness of yours?</label>
                <textarea
                  id="skills"
                  name="skills"
                  rows="4"
                  cols="50"
                ></textarea>
              </div>
            </div>

            <div className="inputs one-inputs">
              <div className="label">
                <label>What are your biggest strengths?</label>
                <textarea
                  id="skills"
                  name="skills"
                  rows="4"
                  cols="50"
                ></textarea>
              </div>
            </div>

            <div className="inputs one-inputs">
              <div className="label">
                <label>How long do you expect to work for this company?</label>
                <textarea
                  id="skills"
                  name="skills"
                  rows="4"
                  cols="50"
                ></textarea>
              </div>
            </div>

            <div className="inputs one-inputs">
              <div className="label">
                <label>Upload your resume</label>
                <div className="drag-and-drop">
                  <DragDropFiles />
                </div>
              </div>
            </div>

            <div className="inputs one-inputs">
              <div className="label">
                <label>Upload your Professional Photograph</label>
                <div className="drag-and-drop">
                  <DragDropFiles />
                </div>
              </div>
            </div>

            <div className="inputs one-inputs">
              <div className="label">
                <label>Referees Name, Title, Company</label>
                <textarea
                  id="skills"
                  name="skills"
                  rows="4"
                  cols="50"
                ></textarea>
              </div>
            </div>

            <div className="inputs one-inputs">
              <div className="label">
                <div className="submit-btn">
                  <ColorButton>Please Submit Your Application</ColorButton>
                </div>
              </div>
            </div>
          </form>
        </motion.div>
      </CareersSec>
    </motion.Fragment>
  );
};
