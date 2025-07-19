export const landingPageStyles = {
  container: "min-h-screen bg-white text-gray-800",
  header: "sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-100/50 py-3 px-4 md:px-0",
  headerContainer: "max-w-6xl mx-auto flex items-center justify-between gap-5",

  logoContainer: "flex items-center gap-3",
  logoIcon: "w-10 h-10 bg-gradient-to-br from-teal-600 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200",
  logoIconInner: "w-5 h-5 text-white",
  logoText: "text-2xl font-black bg-gradient-to-r from-teal-600 to-amber-500 bg-clip-text text-transparent",

  mobileMenuButton: "md:hidden",
  mobileMenuIcon: "text-gray-700",

  desktopAuthButton: "relative inline-flex items-center justify-center px-5 py-2 bg-white border border-amber-200 text-amber-600 font-medium rounded-xl overflow-hidden transition hover:shadow-md",
  desktopAuthButtonOverlay: "absolute inset-0 bg-gradient-to-br from-teal-600 to-amber-500 opacity-10",
  desktopAuthButtonText: "relative z-10",

  mobileMenu: "md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-40",
  mobileMenuContainer: "p-4 flex flex-col gap-4",
  mobileUserInfo: "flex flex-col gap-2",
  mobileUserWelcome: "text-gray-700 font-medium",
  mobileDashboardButton: "bg-gradient-to-br from-teal-600 to-amber-500 text-white px-4 py-2 rounded-xl shadow",
  mobileAuthButton: "bg-gradient-to-br from-teal-600 to-amber-500 text-white px-4 py-2 rounded-xl",

  main: "w-full",
  heamberction: "pt-20 pb-32 bg-gray-50",
  heroGrid: "max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-10",

  heroLeft: "flex flex-col gap-6",
  tagline: "text-sm uppercase tracking-wide text-amber-600 font-semibold",
  heading: "text-4xl md:text-5xl font-extrabold leading-tight",
  headingText: "text-gray-800",
  headingGradient: "bg-gradient-to-r from-teal-600 to-amber-500 bg-clip-text text-transparent",

  description: "text-gray-600 text-lg max-w-lg",
  ctaButtons: "flex gap-4 mt-6 flex-wrap",

  primaryButton: "relative z-10 px-6 py-3 font-semibold text-white bg-gradient-to-br from-teal-600 to-amber-500 rounded-xl shadow-lg hover:shadow-xl transition-all",
  primaryButtonOverlay: "absolute inset-0 bg-gradient-to-br from-teal-600 to-amber-500 rounded-xl opacity-80 blur-sm",
  primaryButtonContent: "relative z-10 flex items-center gap-2",
  primaryButtonIcon: "w-4 h-4",

  secondaryButton: "text-teal-600 font-medium hover:underline",

  statsContainer: "mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6",
  statItem: "flex flex-col items-start",
  statNumber: "text-3xl font-bold bg-clip-text text-transparent",
  statLabel: "text-gray-500",

  heroIllustration: "relative",
  heroIllustrationBg: "absolute inset-0",
  heroIllustrationContainer: "relative z-10",
  svgContainer: "w-full h-auto",

  svgRect: "fill-[url(#cardGradient)] stroke-gray-300 stroke-[1]",
  svgCircle: "fill-violet-400",
  svgRectPrimary: "fill-amber-500",
  svgRectSecondary: "fill-teal-500",
  svgRectLight: "fill-gray-300",
  svgRectSkill: "fill-amber-300",
  svgAnimatedCircle: "fill-teal-500",
  svgAnimatedRect: "fill-amber-500",
  svgAnimatedPolygon: "fill-orange-400",

  featuresSection: "bg-white py-20 px-4",
  featuresContainer: "max-w-6xl mx-auto",
  featuresHeader: "text-center mb-14",
  featuresTitle: "text-3xl font-bold",
  featuresTitleGradient: "bg-gradient-to-r from-teal-600 to-amber-500 bg-clip-text text-transparent",
  featuresDescription: "text-gray-600 max-w-xl mx-auto mt-3",

  featuresGrid: "grid grid-cols-1 md:grid-cols-3 gap-8",
  featureCard: "relative group rounded-2xl overflow-hidden transition-all",
  featureCardHover: "absolute inset-0 bg-gradient-to-br from-teal-100 to-amber-100 opacity-0 group-hover:opacity-10 transition-all",
  featureCardContent: "relative z-10 p-6 rounded-2xl border shadow-sm",

  featureIconContainer: "w-12 h-12 flex items-center justify-center rounded-full text-white shadow-lg",
  featureIcon: "w-6 h-6",

  featureIconTealAmber: "bg-gradient-to-br from-teal-600 to-amber-500 text-white",
  featureCardTealAmber: "bg-white/90 hover:bg-amber-50/80 border border-amber-100/50",

  featureIconViolet: "bg-gradient-to-br from-violet-600 to-amber-600 text-white",
  featureCardViolet: "bg-white/90 hover:bg-amber-50/80 border border-amber-100/50",

  featureIconamber: "bg-gradient-to-br from-amber-500 to-amber-600 text-white",
  featureCardamber: "bg-white/90 hover:bg-amber-50/80 border border-amber-100/50",

  featureIconOrange: "bg-gradient-to-br from-orange-500 to-red-500 text-white",
  featureCardOrange: "bg-white/90 hover:bg-orange-50/80 border border-orange-100/50",

  featureTitle: "mt-4 font-semibold text-lg text-gray-800",
  featureDescription: "mt-2 text-gray-500 text-sm",

  ctaSection: "py-24 bg-gray-50 px-4",
  ctaContainer: "max-w-5xl mx-auto",
  ctaCard: "relative bg-white rounded-2xl overflow-hidden shadow-xl",
  ctaCardBg: "absolute inset-0 bg-gradient-to-br from-teal-100 to-amber-100 opacity-30",
  ctaCardContent: "relative z-10 p-10 text-center",
  ctaTitle: "text-3xl md:text-4xl font-extrabold",
  ctaTitleGradient: "bg-gradient-to-r from-teal-600 to-amber-500 bg-clip-text text-transparent",
  ctaDescription: "text-gray-600 mt-4 max-w-xl mx-auto",
  ctaButton: "relative mt-8 inline-block px-6 py-3 text-white bg-gradient-to-br from-teal-600 to-amber-500 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all",
  ctaButtonOverlay: "absolute inset-0 bg-gradient-to-br from-teal-600 to-amber-500 opacity-80 blur-sm rounded-xl",
  ctaButtonText: "relative z-10",

  footer: "bg-white border-t border-gray-100 py-6 text-center",
  footerContainer: "max-w-6xl mx-auto px-4",
  footerText: "text-gray-500 text-sm",
  footerHeart: "text-red-500",
};


export const dashboardStyles = {
  // Container
  container: "container mx-auto px-4 py-6",

  // Header
  headerWrapper: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6",
  headerTitle: "text-2xl font-bold text-gray-900",
  headerSubtitle: "text-gray-600",

  // Create Button
  createButton:
    "group relative px-10 py-4 bg-gradient-to-r from-teal-600 to-amber-500 text-white font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-200",
  createButtonOverlay:
    "absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity",
  createButtonContent: "relative flex items-center gap-3",

  // Loading
  spinnerWrapper: "flex justify-center items-center py-12",
  spinner: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600",

  // Empty State
  emptyStateWrapper: "flex flex-col items-center justify-center py-12 text-center",
  emptyIconWrapper: "bg-amber-100 p-4 rounded-full mb-4",
  emptyTitle: "text-xl font-bold text-gray-900 mb-2",
  emptyText: "text-gray-600 max-w-md mb-6",

  // Grid
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",

  // New Resume Card
  newResumeCard:
    "flex flex-col items-center justify-center bg-gradient-to-br from-teal-50 to-amber-50 border-2 border-dashed border-teal-300 rounded-2xl p-6 cursor-pointer transition-all hover:shadow-lg hover:border-teal-500 h-full",
  newResumeIcon:
    "w-16 h-16 rounded-full bg-gradient-to-r from-teal-600 to-amber-500 flex items-center justify-center mb-4",
  newResumeTitle: "text-xl font-bold text-gray-900 mb-2 text-center",
  newResumeText: "text-gray-600 text-center",

  // Modal
  modalHeader: "flex justify-between items-center mb-4",
  modalTitle: "text-xl font-bold text-gray-900",
  modalCloseButton: "text-gray-500 hover:text-gray-700",

  // Delete Confirmation
  deleteIconWrapper: "bg-red-100 p-3 rounded-full mb-4",
  deleteTitle: "text-lg font-bold text-gray-900 mb-2",
  deleteText: "text-gray-600 mb-4",
};



export const cardStyles = {
  // ProfileInfoCard styles
  profileCard: "flex items-center gap-3 p-2 sm:p-3 bg-white/80 backdrop-blur-2xl border border-[#C9D6FF] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03]",
  profileInitialsContainer: "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-2xl flex items-center justify-center shadow-md",
  profileInitialsText: "text-base sm:text-lg font-black text-white",
  profileName: "text-xs sm:text-sm font-bold text-[#2b2d42]",
  logoutButton: "text-[#667eea] text-[10px] sm:text-xs font-bold cursor-pointer hover:text-[#f7971e] transition-colors",

  // ResumeSummaryCard styles
  resumeCard: "group relative h-[360px] sm:h-[380px] lg:h-[400px] flex flex-col bg-white border border-gray-200 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:border-[#C9D6FF]",
  cardBackground: "absolute inset-0 bg-gradient-to-br from-[#fceabb] via-transparent to-[#f8b500] opacity-0 group-hover:opacity-100 transition-opacity duration-500",
  previewArea: "p-4 sm:p-6 flex-1 relative overflow-hidden",
  emptyPreview: "w-full h-[180px] sm:h-[200px] lg:h-[220px] flex flex-col items-center justify-center rounded-2xl",
  emptyPreviewIcon: "w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center mb-4 shadow-md",
  emptyPreviewText: "text-[#1c1e21] text-sm font-bold",
  emptyPreviewSubtext: "text-gray-500 text-xs mt-1",
  infoArea: "bg-gray-50 border-t border-gray-200 p-4 sm:p-6",
  title: "text-sm sm:text-base font-bold text-gray-800 truncate mb-2 group-hover:text-[#667eea] transition-colors",
  dateInfo: "flex items-center gap-2 text-xs text-gray-500",

  // Action buttons
  actionOverlay: "absolute inset-4 sm:inset-6 bg-gradient-to-t from-white/80 via-white/20 to-transparent flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl",
  actionButtonsContainer: "flex gap-3",
  editButton: "group/btn w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#36D1DC] to-[#5B86E5] rounded-2xl shadow-md hover:scale-110 transition-all duration-300",
  deleteButton: "group/btn w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#ff0844] to-[#ffb199] rounded-2xl shadow-md hover:scale-110 transition-all duration-300",
  buttonIcon: "text-white group-hover/btn:scale-110 transition-transform",

  // Progress and completion styles
  progressBar: "relative w-full h-2 bg-gray-200 rounded-full overflow-hidden",
  progressFill: "h-full rounded-full transition-all duration-700 ease-out relative overflow-hidden",
  progressGlow: "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse",
  progressIndicator: "absolute top-0 h-full w-4 bg-gradient-to-r from-transparent to-white/50 blur-sm transition-all duration-700",
  completionStatus: "flex justify-between items-center mt-2",
  statusText: "text-xs font-medium text-gray-500",
  percentageText: "text-xs font-bold text-gray-700",

  // Completion indicator
  completionIndicator: "absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-full shadow-sm",
  completionDot: "w-3 h-3 rounded-full flex items-center justify-center",
  completionDotInner: "w-1 h-1 bg-white rounded-full",
  completionPercentageText: "text-xs font-bold text-gray-700",

  // Completion color classes
  completionHigh: "from-[#0ba360] to-[#3cba92]",
  completionMedium: "from-[#F7971E] to-[#FFD200]",
  completionLow: "from-[#FF416C] to-[#FF4B2B]",

  // TemplateCard styles
  templateCard: "relative rounded-lg overflow-hidden shadow-md transition-all duration-300 cursor-pointer border border-gray-200",
  templateCardSelected: "ring-2 ring-[#36D1DC] scale-[1.02]",
  templateCardDefault: "hover:shadow-lg hover:border-gray-300",
  templateDesign: "relative h-full w-full aspect-[4/5]",
  templateOverlay: "absolute inset-0 bg-white/10 backdrop-blur-sm",
  selectionIndicator: "absolute top-4 right-4 z-20",
  selectionCircle: "w-8 h-8 bg-[#36D1DC] rounded-full flex items-center justify-center shadow-md",
  selectionIcon: "text-white",
  templateHoverEffect: "absolute inset-0 bg-black/5 opacity-0 hover:opacity-100 transition-opacity duration-300",
  templateName: "text-sm font-medium text-gray-800",
  emptyTemplate: "relative h-full w-full rounded-lg overflow-hidden",
  emptyTemplateIcon: "p-3 bg-white/90 rounded-full shadow-sm",
  emptyTemplateText: "text-xs text-gray-600 mt-1"
};


export const authStyles = {
  container:
    "w-[90vw] md:w-[400px] p-8 bg-gradient-to-br from-white to-amber-50 rounded-3xl border border-amber-100 shadow-2xl",
  headerWrapper: "text-center mb-8",
  title: "text-2xl font-black text-gray-900 mb-2",
  subtitle: "text-gray-600 font-medium",

  form: "space-y-6",
  errorMessage:
    "text-red-600 text-sm font-medium bg-red-100/70 border border-red-300 px-4 py-3 rounded-xl",

  submitButton:
    "w-full py-4 bg-gradient-to-r from-teal-600 to-amber-500 text-white font-black rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-amber-300 transition-all text-lg",

  switchText: "text-center text-sm text-gray-600 font-medium",
  switchButton:
    "font-black text-amber-600 hover:text-teal-600 transition-colors",

  signupContainer:
    "w-[90vw] md:w-[400px] p-8 bg-gradient-to-br from-white to-amber-50 rounded-3xl border border-amber-100 shadow-2xl overflow-hidden",
  signupTitle: "text-2xl font-black text-gray-900 mb-2",
  signupSubtitle: "text-gray-600 font-medium",
  signupForm: "space-y-4",
  signupSubmit:
    "w-full py-4 bg-gradient-to-r from-teal-600 to-amber-500 text-white font-black rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-amber-300 transition-all text-lg",

  signupSwitchButton:
    "font-black text-amber-600 hover:text-teal-600  transition-colors",
};




export const shimmerStyle = `
  @keyframes shimmer {
    0% { transform: translateX(-100%); opacity: 0.3; }
    100% { transform: translateX(100%); opacity: 0.3; }
  }

  @keyframes flow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes bubble {
    0% {
      transform: translateY(0) scale(1);
      opacity: 0.7;
      filter: blur(0);
    }
    50% {
      transform: translateY(-12px) scale(1.1);
      opacity: 1;
      filter: blur(1px);
    }
    100% {
      transform: translateY(0) scale(1);
      opacity: 0.7;
      filter: blur(0);
    }
  }

  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 12px rgba(124, 58, 237, 0.3), 0 0 20px rgba(232, 121, 249, 0.3);
    }
    50% {
      box-shadow: 0 0 25px rgba(124, 58, 237, 0.6), 0 0 35px rgba(232, 121, 249, 0.5);
    }
  }

  .animate-shimmer {
    animation: shimmer 2.5s infinite linear;
  }

  .animate-flow {
    animation: flow 6s infinite linear;
    background-size: 200% 200%;
  }

  .animate-bubble {
    animation: bubble 3s infinite ease-in-out;
  }

  .animate-pulse-glow {
    animation: pulse-glow 2.8s infinite ease-in-out;
  }
`

// Common Styles
export const commonStyles = {
  trashButton: "absolute top-4 right-4 p-2 text-red-500 hover:bg-red-50 rounded-xl transition-all",
  addButtonBase: "flex items-center gap-3 px-6 py-3 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg",
};

// AdditionalInfoForm Styles
// AdditionalInfoForm Styles
export const additionalInfoStyles = {
  container: "p-8 bg-gradient-to-br from-white to-amber-50",
  heading: "text-2xl font-black text-neutral-900 mb-8",
  sectionHeading: "text-lg font-bold text-neutral-800 mb-6 flex items-center gap-2",
  dotViolet: "w-2 h-2 bg-gradient-to-r from-amber-500 to-purple-500 rounded-full",
  dotOrange: "w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full",
  languageItem: "relative bg-white border border-amber-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all",
  interestItem: "relative",
  addButtonLanguage: "bg-gradient-to-r from-amber-500 to-purple-500",
  addButtonInterest: "bg-gradient-to-r from-yellow-400 to-amber-500",
};

// CertificationInfoForm Styles
export const certificationInfoStyles = {
  container: "p-8 bg-gradient-to-br from-white to-lime-50",
  heading: "text-2xl font-black text-neutral-900 mb-8",
  item: "relative bg-white border border-lime-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all",
  addButton: "bg-gradient-to-r from-lime-500 to-green-400",
};

// ContactInfoForm Styles
export const contactInfoStyles = {
  container: "p-8 bg-gradient-to-br from-white to-sky-50",
  heading: "text-2xl font-black text-neutral-900 mb-8",
};

// EducationDetailsForm Styles
export const educationDetailsStyles = {
  container: "p-8 bg-gradient-to-br from-white to-slate-50",
  heading: "text-2xl font-black text-neutral-900 mb-8",
  item: "relative bg-white border border-slate-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all",
  addButton: "bg-gradient-to-r from-slate-600 to-gray-400",
};

// ProfileInfoForm Styles
export const profileInfoStyles = {
  container: "p-8 bg-gradient-to-br from-white to-amber-100",
  heading: "text-2xl font-black text-neutral-900 mb-8",
  textarea:
    "w-full p-4 bg-white border border-amber-300 rounded-xl focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all outline-none resize-none",
};

// ProjectDetailForm Styles
export const projectDetailStyles = {
  container: "p-8 bg-gradient-to-br from-white to-cyan-100",
  heading: "text-2xl font-black text-neutral-900 mb-8",
  item: "relative bg-white border border-cyan-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all",
  textarea:
    "w-full p-4 bg-white border border-cyan-300 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 transition-all outline-none resize-none",
  addButton: "bg-gradient-to-r from-cyan-500 to-indigo-500",
};

// SkillsInfoForm Styles
export const skillsInfoStyles = {
  container: "p-8 bg-gradient-to-br from-white to-yellow-50",
  heading: "text-2xl font-black text-neutral-900 mb-8",
  item: "relative bg-white border border-yellow-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all",
  addButton: "bg-gradient-to-r from-yellow-400 to-orange-400",
};

// WorkExperienceForm Styles
export const workExperienceStyles = {
  container: "p-8 bg-gradient-to-br from-white to-emerald-50",
  heading: "text-2xl font-black text-neutral-900 mb-8",
  item: "relative bg-white border border-emerald-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all",
  textarea:
    "w-full p-4 bg-white border border-emerald-300 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all outline-none resize-none",
  addButton: "bg-gradient-to-r from-emerald-500 to-lime-500",
};




export const containerStyles = {
  main: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
  header: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-white to-amber-50 border border-amber-100 rounded-2xl py-4 px-6 mb-6 shadow-sm",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8",
  formContainer: "bg-white border border-amber-100 rounded-2xl overflow-hidden shadow-sm",
  previewContainer: "bg-white border border-amber-100 rounded-2xl overflow-hidden shadow-sm p-4",
  previewInner: "w-full max-w-[800px] mx-auto",
  modalContent: "w-[90vw] h-[80vh]",
  pdfPreview: "w-full p-4 flex justify-center",
  hiddenThumbnail: "bg-white shadow-lg max-w-[400px] mx-auto",
};

export const buttonStyles = {
  theme: "flex items-center gap-2 px-3 sm:px-4 py-2 bg-amber-100 text-amber-700 font-bold rounded-xl hover:bg-amber-200 transition-all",
  delete: "flex items-center gap-2 px-3 sm:px-4 py-2 bg-red-100 text-red-700 font-bold rounded-xl hover:bg-red-200 transition-all",
  download: "flex items-center gap-2 px-3 sm:px-4 py-2 bg-lime-100 text-lime-700 font-bold rounded-xl hover:bg-lime-200 transition-all",
  back: "flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-all text-sm",
  save: "flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-100 text-blue-700 font-bold rounded-xl hover:bg-blue-200 transition-all text-sm",
  next: "flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-500 to-amber-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg text-sm",
  modalAction: "flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-500 to-amber-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg text-sm",
};

export const statusStyles = {
  completionBadge: "inline-flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full text-sm font-medium text-slate-700",
  modalBadge: "inline-flex items-center gap-2 bg-amber-100 px-3 py-1 rounded-full text-sm font-medium text-amber-700",
  error: "flex items-center gap-3 text-sm font-medium text-orange-700 bg-orange-50 border border-orange-200 px-4 py-3 rounded-xl mb-4",
};

export const iconStyles = {
  pulseDot: "w-2 h-2 rounded-full bg-lime-500 animate-pulse",
};

export const inputStyles = {
  wrapper: "mb-6 group",
  label: "block text-sm font-bold text-gray-800 mb-3 group-focus-within:text-amber-600 transition-colors",
  inputContainer: focused =>
    `relative flex items-center bg-gray-50 border-2 px-4 py-3 rounded-xl transition-all duration-300 ${focused
      ? 'border-amber-500 ring-4 ring-amber-500/20 shadow-lg shadow-amber-500/10'
      : 'border-gray-300 hover:border-gray-400'
    }`,
  inputField: "w-full bg-transparent outline-none text-gray-800 placeholder-gray-500 font-medium",
  toggleButton: "text-gray-500 hover:text-amber-600 transition-colors p-1 rounded-lg hover:bg-gray-100",
};

export const photoSelectorStyles = {
  container: "flex justify-center mb-8",
  hiddenInput: "hidden",
  placeholder: hovered =>
    `relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center bg-gray-50 border-2 border-dashed border-gray-300 rounded-full cursor-pointer transition-all duration-300 ${hovered ? 'hover:border-amber-500 hover:bg-amber-50' : ''
    }`,
  cameraButton:
    "absolute -bottom-2 -right-2 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-amber-500 to-amber-500 hover:from-amber-600 hover:to-amber-600 text-white rounded-full transition-all shadow-lg hover:scale-110",
  previewWrapper: "relative group",
  previewImageContainer: hovered =>
    `w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg transition-all duration-300 ${hovered ? 'group-hover:border-amber-400' : ''
    }`,
  previewImage: "w-full h-full object-cover cursor-pointer group-hover:scale-110 transition-transform duration-300",
  overlay: "absolute inset-0 bg-black/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center",
  actionButton: (bg, hoverBg, textColor) =>
    `w-10 h-10 flex items-center justify-center bg-${bg} text-${textColor} rounded-full hover:bg-${hoverBg} transition-all`,
};

export const titleInputStyles = {
  container: "flex items-center gap-3",
  titleText: "text-lg sm:text-xl font-bold text-gray-800",
  editButton: "p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all group",
  editIcon: "w-5 h-5 text-gray-600 group-hover:text-amber-600 transition-colors",
  inputField: focused =>
    `text-lg sm:text-xl font-bold bg-transparent outline-none text-gray-800 border-b-2 pb-2 transition-all duration-300 ${focused ? 'border-amber-500' : 'border-gray-300'
    }`,
  confirmButton: "p-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white transition-all",
};

export const modalStyles = {
  overlay: "fixed inset-0 flex items-center justify-center w-full h-full bg-black/60 backdrop-blur-sm z-50",
  container: "relative flex flex-col bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden border border-amber-100 max-w-[95vw] max-h-[95vh]",
  header: "flex items-center justify-between p-6 border-b border-amber-100 bg-gradient-to-r from-white to-amber-50",
  title: "text-xl font-black text-slate-900",
  actionButton: "flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg mr-12",
  closeButton: "absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-xl transition-all shadow-lg hover:scale-110 z-10",
  body: "flex-1 overflow-y-auto",
};

export const infoStyles = {
  progressWrapper: "w-20 h-2 rounded-full bg-gray-200",
  progressBar: color => `h-full rounded-full transition-all bg-${color}`,

  actionWrapper: "flex items-center gap-3",
  actionIconWrapper: "w-6 h-6 flex items-center justify-center rounded-full",
  actionLink: "text-sm font-medium underline cursor-pointer break-all text-gray-600 hover:text-amber-600 transition-colors",

  certContainer: "mb-4",
  certTitle: "text-base font-semibold text-gray-900",
  certRow: "flex items-center gap-2 mt-1",
  certYear: bgColor => `text-xs font-bold text-white px-3 py-1 rounded-lg bg-${bgColor}`,
  certIssuer: "text-sm text-gray-600 font-medium",

  contactRow: "flex items-center gap-3 mb-3",
  contactIconWrapper: "w-8 h-8 flex items-center justify-center rounded-lg",
  contactText: "flex-1 text-sm font-medium break-all text-gray-700",

  eduContainer: "mb-5",
  eduDegree: "text-base font-semibold pb-2 text-gray-900",
  eduInstitution: "text-sm text-gray-700 font-medium",
  eduDuration: "text-xs text-gray-500 font-medium italic mt-1",

  infoRow: "flex items-center justify-between mb-3",
  infoLabel: "text-sm font-semibold text-gray-900",

  linkRow: "flex items-center space-x-1 hover:text-blue-600",

  projectContainer: "mb-5",
  projectTitle: isPreview => `${isPreview ? 'text-sm' : 'text-base'} font-semibold text-gray-900`,
  projectDesc: "text-sm text-gray-600 mt-1 leading-relaxed",
  projectLinks: "flex items-center gap-4 font-medium mt-3",

  ratingWrapper: "flex gap-2 cursor-pointer",
  ratingDot: "w-4 h-4 rounded transition-all hover:scale-110",

  skillGrid: "grid grid-cols-2 gap-x-6 gap-y-2 mb-5",

  workContainer: "mb-6",
  workHeader: "flex items-start justify-between mb-2",
  workCompany: "text-base font-semibold pb-2 text-gray-900",
  workRole: "text-base font-medium text-gray-700",
  workDuration: color => `text-sm font-bold italic text-${color}`,
  workDesc: "text-sm text-gray-600 font-medium leading-relaxed",
};
