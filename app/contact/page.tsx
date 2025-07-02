"use client"

import type React from "react"
import './_components/RegisterPage.css'
import { useState } from "react"
import Link from "next/link"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mailingAddress: "",
    mobile: "",
    category: "",
    customCategory: "",
    affiliation: "",
    designation: "",
    department: "",
    startingDate: "",
    occupationalAddress: "",
    affiliationWebsite: "",
    academicDegree: "",
    howDidYouKnow: "",
    customHowDidYouKnow: "",
    attendanceType: "",
    participationCertificate: "",
    dietaryRestrictions: "",
    posterDemo: "",
    volunteer: "",
    mailingList: "",
    futureGoals: "",
    contribution: "",
    comments: "",
  })

  const [currentSection, setCurrentSection] = useState(0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  const sections = [
    {
      title: "Personal Information",
      fields: ["fullName", "email", "mailingAddress", "mobile"],
    },
    {
      title: "Professional Details",
      fields: [
        "category",
        "affiliation",
        "designation",
        "department",
        "startingDate",
        "occupationalAddress",
        "affiliationWebsite",
        "academicDegree",
      ],
    },
    {
      title: "Event Preferences",
      fields: [
        "howDidYouKnow",
        "attendanceType",
        "participationCertificate",
        "dietaryRestrictions",
        "posterDemo",
        "volunteer",
        "mailingList",
      ],
    },
    {
      title: "Additional Information",
      fields: ["futureGoals", "contribution", "comments"],
    },
  ]

  return (
    <div className="registration-container">
      <div className="registration-header">
        <div className="header-content">
          <Link href="/" className="back-link">
            <i className="fa-solid fa-arrow-left"></i> Back to Home
          </Link>
          <h1>Bangladesh National Semiconductor Symposium 2025</h1>
          <h2>Registration Form</h2>
          <div className="event-info">
            <div className="info-item">
              <i className="fa-solid fa-calendar"></i>
              <span>July 16-18, 2025</span>
            </div>
            <div className="info-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>Dhaka & Chattogram</span>
            </div>
          </div>
        </div>
      </div>

      <div className="registration-content">
        <div className="contact-info">
          <h3>Need Help?</h3>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fa-solid fa-envelope"></i>
              <span>nssbd2025@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="fa-solid fa-phone"></i>
              <div>
                <div>Rafi: +8801305288721</div>
                <div>Jubayer: +8801620472765</div>
              </div>
            </div>
            <div className="contact-item">
              <i className="fa-brands fa-facebook"></i>
              <span>Follow our Facebook Page for updates</span>
            </div>
          </div>
        </div>

        <div className="form-container">
          <div className="progress-bar">
            {sections.map((section, index) => (
              <div key={index} className={`progress-step ${index <= currentSection ? "active" : ""}`}>
                <div className="step-number">{index + 1}</div>
                <div className="step-title">{section.title}</div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="registration-form">
            <div className="form-section">
              <h3>{sections[currentSection].title}</h3>

              {currentSection === 0 && (
                <>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name (in English) *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Preferred: Institutional / Official email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="mailingAddress">Mailing (Residential) Address *</label>
                    <textarea
                      id="mailingAddress"
                      name="mailingAddress"
                      value={formData.mailingAddress}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      placeholder="Enter your complete mailing address"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="mobile">Mobile Number *</label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      placeholder="Preferably WhatsApp-enabled"
                    />
                  </div>
                </>
              )}

              {currentSection === 1 && (
                <>
                  <div className="form-group">
                    <label htmlFor="category">Which category best describes you? *</label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="Government Official">Government Official</option>
                      <option value="Academic Faculty / Researcher">Academic Faculty / Researcher</option>
                      <option value="Student">Student</option>
                      <option value="Industry Professional">Industry Professional</option>
                      <option value="Journalist / Media Personnel">Journalist / Media Personnel</option>
                      <option value="Businessperson / Entrepreneur">Businessperson / Entrepreneur</option>
                      <option value="Private Jobholder">Private Jobholder</option>
                      <option value="Freelancer">Freelancer</option>
                      <option value="Other">Other</option>
                    </select>
                    {formData.category === "Other" && (
                      <input
                        type="text"
                        name="customCategory"
                        value={formData.customCategory}
                        onChange={handleInputChange}
                        placeholder="Please specify"
                        className="mt-2"
                      />
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="affiliation">Affiliation *</label>
                    <input
                      type="text"
                      id="affiliation"
                      name="affiliation"
                      value={formData.affiliation}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Bangladesh University of Engineering and Technology"
                    />
                    <small>Please write in full form. If there are multiple, you can mention all.</small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="designation">Designation / Title *</label>
                    <input
                      type="text"
                      id="designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Assistant Professor, Director, Founder & CEO, BSc 4th Year Student"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="department">Department / Division / Group *</label>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., R&D, HR, Finance, EEE, CSE, Applied Mathematics"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="startingDate">Starting Date of Your Current Affiliation *</label>
                    <input
                      type="date"
                      id="startingDate"
                      name="startingDate"
                      value={formData.startingDate}
                      onChange={handleInputChange}
                      required
                    />
                    <small>Date of Joining</small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="occupationalAddress">Occupational Address *</label>
                    <textarea
                      id="occupationalAddress"
                      name="occupationalAddress"
                      value={formData.occupationalAddress}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      placeholder="Location of Your Current Institution / Organization / Company / Business / Startup, etc."
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="affiliationWebsite">Affiliation Website / Social Media Handle *</label>
                    <input
                      type="url"
                      id="affiliationWebsite"
                      name="affiliationWebsite"
                      value={formData.affiliationWebsite}
                      onChange={handleInputChange}
                      required
                      placeholder="https://example.com or @username"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="academicDegree">Highest Academic Degree and Institution *</label>
                    <input
                      type="text"
                      id="academicDegree"
                      name="academicDegree"
                      value={formData.academicDegree}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., MSc in EEE, BUET"
                    />
                  </div>
                </>
              )}

              {currentSection === 2 && (
                <>
                  <div className="form-group">
                    <label htmlFor="howDidYouKnow">
                      How did you come to know about Bangladesh National Semiconductor Symposium 2025? *
                    </label>
                    <select
                      id="howDidYouKnow"
                      name="howDidYouKnow"
                      value={formData.howDidYouKnow}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Website">Website</option>
                      <option value="Formal Invitation">Formal Invitation</option>
                      <option value="Family / Friends / Acquaintances">Family / Friends / Acquaintances</option>
                      <option value="Other">Other</option>
                    </select>
                    {formData.howDidYouKnow === "Other" && (
                      <input
                        type="text"
                        name="customHowDidYouKnow"
                        value={formData.customHowDidYouKnow}
                        onChange={handleInputChange}
                        placeholder="Please specify"
                        className="mt-2"
                      />
                    )}
                  </div>

                  <div className="form-group">
                    <label>You are attending - *</label>
                    <div className="radio-group">
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="attendanceType"
                          value="in-person (Dhaka)"
                          checked={formData.attendanceType === "in-person (Dhaka)"}
                          onChange={handleInputChange}
                          required
                        />
                        <span>In-person (Dhaka)</span>
                      </label>
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="attendanceType"
                          value="virtually (if applicable)"
                          checked={formData.attendanceType === "virtually (if applicable)"}
                          onChange={handleInputChange}
                          required
                        />
                        <span>Virtually (if applicable)</span>
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Do you require a participation certificate? *</label>
                    <div className="radio-group">
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="participationCertificate"
                          value="Yes"
                          checked={formData.participationCertificate === "Yes"}
                          onChange={handleInputChange}
                          required
                        />
                        <span>Yes</span>
                      </label>
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="participationCertificate"
                          value="No"
                          checked={formData.participationCertificate === "No"}
                          onChange={handleInputChange}
                          required
                        />
                        <span>No</span>
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="dietaryRestrictions">Do you have any dietary restrictions? *</label>
                    <input
                      type="text"
                      id="dietaryRestrictions"
                      name="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Vegetarian, Allergies, etc. Write 'None' if no restrictions"
                    />
                  </div>

                  <div className="form-group">
                    <label>Would you like to submit a poster or do a demo in the BEAR Innovation Pavilion? *</label>
                    <div className="radio-group">
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="posterDemo"
                          value="Yes"
                          checked={formData.posterDemo === "Yes"}
                          onChange={handleInputChange}
                          required
                        />
                        <span>Yes</span>
                      </label>
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="posterDemo"
                          value="No"
                          checked={formData.posterDemo === "No"}
                          onChange={handleInputChange}
                          required
                        />
                        <span>No</span>
                      </label>
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="posterDemo"
                          value="Considering"
                          checked={formData.posterDemo === "Considering"}
                          onChange={handleInputChange}
                          required
                        />
                        <span>Considering</span>
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Would you like to volunteer or join the organizing team? *</label>
                    <div className="radio-group">
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="volunteer"
                          value="Yes"
                          checked={formData.volunteer === "Yes"}
                          onChange={handleInputChange}
                          required
                        />
                        <span>Yes</span>
                      </label>
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="volunteer"
                          value="No"
                          checked={formData.volunteer === "No"}
                          onChange={handleInputChange}
                          required
                        />
                        <span>No</span>
                      </label>
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="volunteer"
                          value="Maybe"
                          checked={formData.volunteer === "Maybe"}
                          onChange={handleInputChange}
                          required
                        />
                        <span>Maybe</span>
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>May we add your email to the official BNSS 2025 mailing list and updates? *</label>
                    <div className="radio-group">
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="mailingList"
                          value="Yes"
                          checked={formData.mailingList === "Yes"}
                          onChange={handleInputChange}
                          required
                        />
                        <span>Yes</span>
                      </label>
                      <label className="radio-option">
                        <input
                          type="radio"
                          name="mailingList"
                          value="No"
                          checked={formData.mailingList === "No"}
                          onChange={handleInputChange}
                          required
                        />
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                </>
              )}

              {currentSection === 3 && (
                <>
                  <div className="form-group">
                    <label htmlFor="futureGoals">
                      What is your future goal, and how does it align with our event? Briefly mention the factors that
                      sparked your interest. *
                    </label>
                    <textarea
                      id="futureGoals"
                      name="futureGoals"
                      value={formData.futureGoals}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Share your future goals and how they align with the symposium..."
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contribution">
                      How do you want to contribute to transform Bangladesh as a Nation of Innovation? *
                    </label>
                    <textarea
                      id="contribution"
                      name="contribution"
                      value={formData.contribution}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Describe how you plan to contribute to Bangladesh's innovation ecosystem..."
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="comments">Any comments, suggestions, or special needs? *</label>
                    <textarea
                      id="comments"
                      name="comments"
                      value={formData.comments}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      placeholder="Write N/A if you have none"
                    />
                  </div>
                </>
              )}
            </div>

            <div className="form-navigation">
              {currentSection > 0 && (
                <button type="button" onClick={() => setCurrentSection(currentSection - 1)} className="btn-secondary">
                  <i className="fa-solid fa-arrow-left"></i> Previous
                </button>
              )}

              {currentSection < sections.length - 1 ? (
                <button type="button" onClick={() => setCurrentSection(currentSection + 1)} className="btn-primary">
                  Next <i className="fa-solid fa-arrow-right"></i>
                </button>
              ) : (
                <button type="submit" className="btn-submit">
                  <i className="fa-solid fa-paper-plane"></i> Submit Registration
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

    
    </div>
  )
}
