import React from "react";
import { template, changeListStyle, insertList, decreaseIndent, increaseIndent } from "../main.js";
import "../main.js";
import "../bootstrap.min.css";
import "../style.css";
import "../main.js";
import "bootstrap/dist/js/bootstrap.min.js";

const Pro = () => {
	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-sm-3 no-print' id='left'>
						<div id='panel'>
							<h3 className='text-center' data-toggle='modal'>
								Resu_Me
							</h3>
							{/* <!--   <button className="btn btn-block btn-primary" data-toggle="modal" data-target="#usageModal">VIEW INSTRUCTIONS</button> --> */}
							<button className='btn btn-block btn-success' onClick={() => window.print()}>
								CREATE PDF
							</button>

							<hr />

							<h4 className='text-center'>input</h4>
							<button id='defaultTemplateBtn' className='btn btn-block btn-danger' onClick={() => template("default")}>
								Use Resu_Me template
							</button>
							<button id='customTemplateBtn' className='btn btn-block btn-default' onClick={() => template("custom")}>
								Use custom template
							</button>
							<h5>
								Semester
								<div className='toggle-button'>
									<div className='toggle-option' data-toggle='minor' id='minorShow'>
										Show
									</div>
									<div className='toggle-option selected' data-toggle='minor' id='minorHide'>
										Hide
									</div>
								</div>
							</h5>
							<h5>
								Contact Lines
								<div className='toggle-button'>
									<div className='toggle-option' data-toggle='contact' id='contact3'>
										2
									</div>
									<div className='toggle-option selected' data-toggle='contact' id='contact4'>
										3
									</div>
									<div className='toggle-option' data-toggle='contact' id='contact5'>
										4
									</div>
								</div>
							</h5>
							<h5>
								Horizontal Margin
								<div className='toggle-button'>
									<div className='toggle-option' data-toggle='margin' id='margin1'>
										1
									</div>
									<div className='toggle-option' data-toggle='margin' id='margin2'>
										2
									</div>
									<div className='toggle-option' data-toggle='margin' id='margin3'>
										3
									</div>
									<div className='toggle-option selected' data-toggle='margin' id='margin4'>
										4
									</div>
									<div className='toggle-option' data-toggle='margin' id='margin5'>
										5
									</div>
									<div className='toggle-option' data-toggle='margin' id='margin6'>
										6
									</div>
								</div>
							</h5>
							<h5>
								Line Spacing
								<div className='toggle-button'>
									<div className='toggle-option' data-toggle='line' id='line1'>
										1
									</div>
									<div className='toggle-option' data-toggle='line' id='line2'>
										2
									</div>
									<div className='toggle-option' data-toggle='line' id='line3'>
										3
									</div>
									<div className='toggle-option selected' data-toggle='line' id='line4'>
										4
									</div>
									<div className='toggle-option' data-toggle='line' id='line5'>
										5
									</div>
									<div className='toggle-option' data-toggle='line' id='line6'>
										6
									</div>
								</div>
							</h5>
							<h5>
								Center Column no.
								<div className='toggle-button'>
									<div className='toggle-option multi-select' data-toggle='column' id='column1'>
										1
									</div>
									<div className='toggle-option multi-select' data-toggle='column' id='column2'>
										2
									</div>
									<div className='toggle-option multi-select' data-toggle='column' id='column3'>
										3
									</div>
									<div className='toggle-option multi-select' data-toggle='column' id='column4'>
										4
									</div>
								</div>
							</h5>

							<br />

							<div id='customTemplateOptions'>
								<h5>
									Font Type
									<div className='toggle-button'>
										<div className='toggle-option' data-toggle='font' id='fontVerdanaSans'>
											1
										</div>
										<div className='toggle-option' data-toggle='font' id='fontMonospace'>
											2
										</div>
										<div className='toggle-option' data-toggle='font' id='fontRoboto'>
											3
										</div>
										<div className='toggle-option selected' data-toggle='font' id='fontDroid'>
											4
										</div>
									</div>
								</h5>
								<h5>
									Title Case
									<div className='toggle-button'>
										<div className='toggle-option selected' data-toggle='case' id='caseNormal'>
											Default
										</div>
										<div className='toggle-option' data-toggle='case' id='caseUpper'>
											Uppercase
										</div>
									</div>
								</h5>
								<h5>
									Title Style
									<div className='toggle-button'>
										<div className='toggle-option selected' data-toggle='title' id='titleRuled'>
											Ruled
										</div>
										<div className='toggle-option' data-toggle='title' id='titleShaded'>
											Shaded
										</div>
									</div>
								</h5>
								<h5>
									Title Rule Position
									<div className='toggle-button'>
										<div className='toggle-option selected' data-toggle='rule' id='ruleAbove'>
											Above title
										</div>
										<div className='toggle-option' data-toggle='rule' id='ruleBelow'>
											Below title
										</div>
									</div>
								</h5>
								<br />
								<h5>
									Image
									<div className='toggle-button'>
										<div className='toggle-option selected' data-toggle='image' id='imageShow'>
											Show
										</div>
										<div className='toggle-option' data-toggle='image' id='imageHide'>
											Hide
										</div>
									</div>
								</h5>
								<h5>
									Roll No.
									<div className='toggle-button'>
										<div className='toggle-option selected' data-toggle='roll' id='rollShow'>
											Show
										</div>
										<div className='toggle-option' data-toggle='roll' id='rollHide'>
											Hide
										</div>
									</div>
								</h5>
								<h5>
									Course
									<div className='toggle-button'>
										<div className='toggle-option selected' data-toggle='course' id='course1'>
											1 line
										</div>
										<div className='toggle-option' data-toggle='course' id='course2'>
											2 lines
										</div>
									</div>
								</h5>
								<h5>
									Table Border
									<div className='toggle-button'>
										<div className='toggle-option selected' data-toggle='table' id='tableShow'>
											Show
										</div>
										<div className='toggle-option' data-toggle='table' id='tableHide'>
											Hide
										</div>
									</div>
								</h5>
								<h5>
									Education Year Column
									<div className='toggle-button'>
										<div className='toggle-option selected' data-toggle='edyear' id='edyearFirst'>
											First
										</div>
										<div className='toggle-option' data-toggle='edyear' id='edyearLat'>
											Last
										</div>
									</div>
								</h5>
								<h5>
									Experience Layout
									<div className='toggle-button'>
										<div className='toggle-option selected' data-toggle='experience' id='experience1'>
											L1
										</div>
										<div className='toggle-option' data-toggle='experience' id='experience2'>
											L2
										</div>
									</div>
								</h5>
								<h5>
									Projects Layout
									<div className='toggle-button'>
										<div className='toggle-option selected' data-toggle='projects' id='projects1'>
											L1
										</div>
										<div className='toggle-option' data-toggle='projects' id='projects2'>
											L2
										</div>
									</div>
								</h5>
								<br />
							</div>

							<h5>
								<button className='btn btn-sm btn-block btn-primary' data-toggle='modal' data-target='#sectionToggleModal'>
									Show/Hide sections
								</button>
							</h5>

							<hr />

							<h4 className='text-center'>Lists and Points</h4>
							<button className='btn btn-block btn-xs btn-success' onClick={insertList}>
								+ Insert sub-list
							</button>
							<button className='btn btn-block btn-xs btn-warning' onClick={decreaseIndent}>
								&lt;&lt; Decrese indentation
							</button>
							<button className='btn btn-block btn-xs btn-warning' onClick={increaseIndent}>
								&gt;&gt; Increase indentation
							</button>
							<h5>
								List Style :
								<div className='toggle-button'>
									<button className='btn btn-xs custom-button' onClick={() => changeListStyle("disc")}>
										&#9899;
									</button>
									<button className='btn btn-xs custom-button' onClick={() => changeListStyle("circle")}>
										&#9898;
									</button>
									<button className='btn btn-xs custom-button' onClick={() => changeListStyle("square")}>
										&#9632;
									</button>
									<button className='btn btn-xs custom-button' onClick={() => changeListStyle("dash")}>
										-
									</button>
									<button className='btn btn-xs custom-button' onClick={() => changeListStyle("decimal")}>
										1.
									</button>
									<button className='btn btn-xs custom-button' onClick={() => changeListStyle("upper-roman")}>
										I.
									</button>
									<button className='btn btn-xs custom-button' onClick={() => changeListStyle("lower-roman")}>
										i.
									</button>
									<button className='btn btn-xs custom-button' onClick={() => changeListStyle("upper-alpha")}>
										A.
									</button>
									<button className='btn btn-xs custom-button' onClick={() => changeListStyle("lower-alpha")}>
										a.
									</button>
								</div>
							</h5>
						</div>
					</div>

					<div contentEditable='true' className='col-sm-9 text-center' id='right'>
						<div id='page' className='droid'>
							<div className='row' id='margin-botton10px'>
								<div className='col-sm-12'>
									<div id='info' className='infoalign'>
										<p id='contentName' className='idfont'>
											<input id='Name' placeholder='Your Name'></input>
										</p>
									</div>
									<div id='contact'>
										<p>
											<input id='contactinput' placeholder='Your@email.com | (123)456-7890 | your.website.com'></input>
										</p>
										<p id='margintop'>
											<span id='contactLink2'>
												<input id='github' placeholder='Github://yourgithub  |'></input>
											</span>
											<span id='contactLink1'>
												<input id='linkedin' placeholder='Linkedln://yourlinkedin |'></input>{" "}
											</span>
											<span id='contactlink5'>
												<input id='codechef' placeholder='CodeChef://yourcodechef | '></input>
											</span>
											<span id='contactlink6'>
												<input id='hackerrank' placeholder='HackerRank://yourrank'></input>
											</span>
										</p>
									</div>
								</div>
							</div>

							<div className='section' id='sectionEducation'>
								<div className='section-title ruled rule-above'>
									<hr className='hr-above' />
									<h4>
										<strong>Education</strong>
									</h4>
									<hr className='hr-below' />
								</div>
								<ul className='nobullet'>
									<li>
										<table className='table customBordered' id='educationTable'>
											<tbody>
												<tr>
													<td className='header'>
														<strong>Year</strong>
													</td>
													<td className='header'>
														<strong>Degree / Certificate</strong>
													</td>
													<td className='header'>
														<strong>Institute / Board</strong>
													</td>
													<td className='header'>
														<strong>CGPA/Percentage</strong>
													</td>
												</tr>
											</tbody>
											<tbody>
												<tr>
													<td>year - Present</td>
													<td>Couse/Degree</td>
													<td>University/College/School</td>
													<td>GPA</td>
												</tr>
											</tbody>
											<tbody>
												<tr>
													<td>Year</td>
													<td>Couse/Degree/Certification</td>
													<td>University/College/School</td>
													<td>Grade</td>
												</tr>
											</tbody>
											<tbody>
												<tr>
													<td>Year</td>
													<td>Couse/Degree/Certification</td>
													<td>University/College/School</td>
													<td>Grade/GPA</td>
												</tr>
											</tbody>
										</table>
									</li>
								</ul>
							</div>

							<div className='section' id='sectionExperience'>
								<div className='section-title ruled rule-above'>
									<hr className='hr-above' />
									<h4>
										<strong>Experience</strong>
									</h4>
									<hr className='hr-below' />
								</div>
								<ul>
									<li>
										<div>
											<div className='title'>Title</div>
											<div className='time right'>Start Date - End Date / (Present)</div>
										</div>
										<div>
											<div className='link right'>www.business.wesite.com</div>
											<div className='text'>Description of role.</div>
										</div>
									</li>
									<li>
										<div>
											<div className='title'>Title</div>
											<div className='time right'>Start Date - End Date / (Present)</div>
										</div>
										<div>
											<div className='link right'>www.business.wesite.com</div>
											<div className='text'>Description of role.</div>
										</div>
									</li>
								</ul>
							</div>

							<div className='section' id='sectionPublications'>
								<div className='section-title ruled rule-above'>
									<hr className='hr-above' />
									<h4>
										<strong>Publications</strong>
									</h4>
									<hr className='hr-below' />
								</div>
								<ul>
									<li>
										<div>
											<div className='title'>Title Of Publication</div>
											<div className='time right'>Place/Date</div>
										</div>
										<div>
											<div className='mentor'>Mentors - </div>
										</div>
									</li>
									<li>
										<div>
											<div className='title'>Title of Publication</div>
											<div className='time right'>Place/Date</div>
										</div>
										<div>
											<div className='mentor'>Mentors - </div>
										</div>
									</li>
								</ul>
							</div>

							<div className='section' id='sectionProjects'>
								<div className='section-title ruled rule-above'>
									<hr className='hr-above' />
									<h4>
										<strong>Projects</strong>
									</h4>
									<hr className='hr-below' />
								</div>
								<ul>
									<li>
										<div>
											<div className='title'>Project title</div>
											<div className='time right'>Ongoing</div>
										</div>
										<div>
											<div className='mentor tab'>Project Mentor</div>
										</div>
										<div>
											<div className='text'>Graphical interface to share files over institute's network.</div>
										</div>
									</li>
									<li>
										<div>
											<div className='title'>Project title</div>
											<div className='time right'>Apr 2016</div>
										</div>
										<div>
											<div className='mentor tab'>Dr. XYZ, Associate Professor, Dept. of XXX, IIT Guwahati</div>
											<div className='link right'>goo.gl/link</div>
										</div>
										<div>
											<div className='text'>Graphical interface to share files over institute's network.</div>
										</div>
									</li>
									<li>
										<div>
											<div className='title'>Project title</div>
											<div className='time right'>Jan 2016 - Mar 2016</div>
										</div>
										<div>
											<div className='mentor tab'>Mentor name</div>
											<div className='link right'>www.xyz.in</div>
										</div>
										<div>
											<div className='text'>Graphical interface to share files over institute's network.</div>
										</div>
									</li>
									<li>
										<div>
											<div className='title'>Project title</div>
											<div className='time right'>Feb 2016</div>
										</div>
										<div>
											<div className='link right'>goo.gl/link</div>
										</div>
										<div>
											<div className='text'>Graphical interface to share files over institute's network.</div>
										</div>
									</li>
									<li>
										<div>
											<div className='title'>Project title</div>
											<div className='time right'>Nov 2015</div>
										</div>
										<div>
											<div className='mentor tab'>Mentor name</div>
											<div className='link right'>github.com/link</div>
										</div>
										<div>
											<div className='text'>Graphical interface to share files over institute's network.</div>
										</div>
									</li>
									<li>
										<div>
											<div className='title'>Project title</div>
											<div className='time right'>Aug 2015 - Sep 2015</div>
										</div>
										<div>
											<div className='text'>Graphical interface to share files over institute's network.</div>
										</div>
									</li>
								</ul>
							</div>

							<div className='section' id='sectionSkills'>
								<div className='section-title ruled rule-above'>
									<hr className='hr-above' />
									<h4>
										<strong>Technical skills</strong>
									</h4>
									<hr className='hr-below' />
								</div>
								<ul>
									<li>
										<strong>
											<span className='skillCategory'>Programming languages</span> :
										</strong>{" "}
										C++, Python, Java *
									</li>
									<li>
										<strong>
											<span className='skillCategory'>Web technologies</span> :
										</strong>{" "}
										HTML, CSS, Javascript
									</li>
									<li>
										<strong>
											<span className='skillCategory'>Database management</span> :
										</strong>{" "}
										mySQL
									</li>
									<li>
										<strong>
											<span className='skillCategory'>Miscellaneous</span> :
										</strong>{" "}
										Android programming *
									</li>
									<li>
										<strong>
											<span className='skillCategory'>Operating system</span> :
										</strong>{" "}
										Windows, Linux
									</li>
									<div className='star'>
										<i>
											*<span className='light'> Elementary proficiency</span>
										</i>
									</div>
								</ul>
							</div>

							<div className='section' id='sectionResponsibility'>
								<div className='section-title ruled rule-above'>
									<hr className='hr-above' />
									<h4>
										<strong>Positions of Responsibility</strong>
									</h4>
									<hr className='hr-below' />
								</div>
								<ul>
									<li>XYZ Head, ABC 2016 (the annual XYZ of IIT Guwahati)</li>
									<li>City representative, New Delhi, ABC 2015</li>
								</ul>
							</div>

							<div className='section' id='sectionAchievements'>
								<div className='section-title ruled rule-above'>
									<hr className='hr-above' />
									<h4>
										<strong>Achievements</strong>
									</h4>
									<hr className='hr-below' />
								</div>
								<ul>
									<li>
										<span className='title'>ABC contest 2016 : </span>
										<span className='text'>Secured 1st position in the National level contest.</span>
									</li>
									<li>
										<span className='title'>Joint Entrance Examination 2014 : </span>
										<span className='text'>Secured All India Rank 1 among 0.15 million candidates appearing for the test.</span>
									</li>
									<li>
										<span className='title'>KVPY 2013-14 : </span>
										<span className='text'>Obtained the National research fellowship scholarship by securing a position in top 1%.</span>
									</li>
									<li>
										<span className='title'>ABC Olympiad 2014 : </span>
										<span className='text'>Qualified for the international stage by securing top position in following stages :</span>
										<ul className='decimal'>
											<li>Qualifiers stage : Bagged 20th position among 5000 candidates.</li>
											<li>National level : Bagged 7th position among 250 candidates.</li>
										</ul>
									</li>
								</ul>
							</div>

							<div className='section' id='sectionCourses'>
								<div className='section-title ruled rule-above'>
									<hr className='hr-above' />
									<h4>
										<strong>Key courses taken</strong>
									</h4>
									<hr className='hr-below' />
								</div>
								<ul>
									<div className='row'>
										<div className='col-sm-6'>
											<li>Computer lab</li>
											<li>Process design</li>
											<li>Statistics *</li>
										</div>
										<div className='col-sm-6'>
											<li>Advanced calculus</li>
											<li>XYZ architecture *</li>
											<li>ABC lab *</li>
										</div>
									</div>
									<div className='star'>
										<i>
											*<span className='light'> To be completed in Nov 2016</span>
										</i>
									</div>
								</ul>
							</div>

							<div className='section' id='sectionlinks'>
								<div className='section-title ruled rule-above'>
									<hr className='hr-above' />
									<h4>
										<strong>Links</strong>
									</h4>
									<hr className='hr-below' />
								</div>
								<ul>
									<div className='row'>
										<div className='col-sm-6'>
											<li>GitHub://xyz</li>
											<li>Linkedin://xyz</li>
											<li>Medium://xyz</li>
										</div>
										<div className='col-sm-6'>
											<li>CodeChef://xyz</li>
											<li>HackerRank://xyz</li>
											<li>Web-Page://xyz.github.io</li>
										</div>
									</div>
								</ul>
							</div>

							<div className='section' id='sectionCurricular'>
								<div className='section-title ruled rule-above'>
									<hr className='hr-above' />
									<h4>
										<strong>Hobbies</strong>
									</h4>
									<hr className='hr-below' />
								</div>
								<ul>
									<li>PHOTOGRAPHY</li>
									<li>QUORA WRITING</li>
									<li>VIDEO EDITING</li>
									<li>WATCHING STANDUP COMEDY</li>
								</ul>
							</div>

							<div className='section' id='sectionInterest'>
								<div className='section-title ruled rule-above'>
									<hr className='hr-above' />
									<h4>
										<strong>Fields of interest (OR Research interests)</strong>
									</h4>
									<hr className='hr-below' />
								</div>
								<ul>
									<div className='row'>
										<div className='col-sm-6'>
											<li>Advanced XYZ</li>
											<li>ABC design</li>
										</div>
										<div className='col-sm-6'>
											<li>XYZ processing</li>
											<li>Robotics</li>
										</div>
									</div>
								</ul>
							</div>

							<div className='section' id='sectionFooterMessage'>
								<div className='section-title ruled rule-above'>
									<hr className='hr-above' />
									<h6>
										<strong>(References available on request)</strong>
									</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='modal fade' id='sectionToggleModal' tabIndex='-1'>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-body'>
							<button type='button' className='close' data-dismiss='modal'>
								&times;
							</button>
							<div className='checkbox'>
								<label>
									<input type='checkbox' name='sectionToggle' defaultChecked={true} value='sectionEducation' />
									Education
								</label>
							</div>
							<div className='checkbox'>
								<label>
									<input type='checkbox' name='sectionToggle' defaultChecked={true} value='sectionExperience' />
									Experience
								</label>
							</div>
							<div className='checkbox'>
								<label>
									<input type='checkbox' name='sectionToggle' defaultChecked={true} value='sectionPublications' />
									Publications
								</label>
							</div>
							<div className='checkbox'>
								<label>
									<input type='checkbox' name='sectionToggle' defaultChecked={true} value='sectionProjects' />
									Projects
								</label>
							</div>
							<div className='checkbox'>
								<label>
									<input type='checkbox' name='sectionToggle' defaultChecked={true} value='sectionSkills' />
									Technical Skills
								</label>
							</div>
							<div className='checkbox'>
								<label>
									<input type='checkbox' name='sectionToggle' defaultChecked={true} value='sectionResponsibility' />
									Positions of Responsibility
								</label>
							</div>
							<div className='checkbox'>
								<label>
									<input type='checkbox' name='sectionToggle' defaultChecked={true} value='sectionAchievements' />
									Achievements
								</label>
							</div>
							<div className='checkbox'>
								<label>
									<input type='checkbox' name='sectionToggle' defaultChecked={true} value='sectionCourses' />
									Key courses taken
								</label>
							</div>
							<div className='checkbox'>
								<label>
									<input type='checkbox' name='sectionToggle' defaultChecked={true} value='sectionlinks' />
									Links
								</label>
							</div>
							<div className='checkbox'>
								<label>
									<input type='checkbox' name='sectionToggle' defaultChecked={true} value='sectionCurricular' />
									Hobbies
								</label>
							</div>
							<div className='checkbox'>
								<label>
									<input type='checkbox' name='sectionToggle' value='sectionFooterMessage' />
									References message
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Pro;
