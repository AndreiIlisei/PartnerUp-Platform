
      //     <div>
      //     <div>
      //       <img src={imageUrl} alt="profile" className="profile-image" />
      //       <input
      //         type="file"
      //         id="imageInput"
      //         hidden="hidden"
      //         onChange={this.handleImageChange}
      //       />
      //       <Tooltip title="Edit profile picture" placement="top">
      //         <IconButton onClick={this.handleEditPicture} className="button">
      //           <EditIcon color="primary" />
      //         </IconButton>
      //       </Tooltip>
      //     </div>
      //     <hr />
      //     <div>
      //       <MuiLink
      //         component={Link}
      //         to={`/users/${handle}`}
      //         color="primary"
      //         variant="h5"
      //       >
      //         @{handle}
      //       </MuiLink>
      //       <hr />
      //       {bio && <Typography variant="body2">{bio}</Typography>}
      //       {name && <Typography variant="body2">{name}</Typography>}
      //       <hr />
      //       {location && (
      //         <Fragment>
      //           <LocationOn color="primary" /> <span>{location}</span>
      //           <hr />
      //         </Fragment>
      //       )}
      //       {website && (
      //         <Fragment>
      //           <LinkIcon color="primary" />
      //           <a href={website} target="_blank" rel="noopener noreferrer">
      //             {" "}
      //             {website}
      //           </a>
      //           <hr />
      //         </Fragment>
      //       )}
      //       <CalendarToday color="primary" />
      //       {""}
      //       <span>Joined {dayjs(createdAt).format("MMM YYYY")}</span>
      //     </div>
      //   </div>
      //   <Tooltip title="Go Back" placement="top">
      //         <IconButton onClick={() => (window.location.href = "homepage")}>
      //            <KeyboardReturn color="primary">
      //            </KeyboardReturn>
      //         </IconButton>
      //   </Tooltip>
      //   <UserProfile/>

      //       {/* Screams to be see */}
      // <div> {recentScreamsMarkup} </div> 