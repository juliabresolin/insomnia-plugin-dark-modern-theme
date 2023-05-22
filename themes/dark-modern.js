module.exports = {
	name: 'dark-modern',
	displayName: 'Dark Modern',
	theme: {
		rawCss: `
		.editor .CodeMirror {
			line-height: 1.8rem;
		}
		.notice.error {
			border-style: unset;
			background-color: var(--color-danger);
			color: white;
		}
		.notice.success {
			border-style: unset;
			background-color: var(--color-success);
			color: black;
		}
		.notice.warning {
			border-style: unset;
			background-color: var(--color-warning);
			color: black;
		}
		.notice.info {
			border-style: unset;
			background-color: var(--color-info);
			color: black;
		}
		`,
		background: {
			default: '#181818',
			success: '#50fa7b',
			notice: '#f1fa8c',
			warning: '#ffb86c',
			danger: '#ff5555',
			surprise: '#35A0F3',
			info: '#8be9fd'
		},
		foreground: {
			default: '#f8f8f2',
			success: '#282a36',
			notice: '#282a36',
			warning: '#282a36',
			danger: '#282a36',
			surprise: '#282a36',
			info: '#282a36'
		},
		highlight: {
			md: '#ffffff12',
		},
		styles: {
			sidebar: {
				background: {
					default: '#181818'
				},
				highlight: {
					default: '#cccccc',
					xxs: 'rgba(98, 98, 98, 0.05)',
					xs: 'rgba(98, 98, 98, 0.1)',
					sm: 'rgba(98, 98, 98, 0.2)',
					md: 'rgba(98, 98, 98, 0.4)',
					lg: 'rgba(98, 98, 98, 0.6)',
					xl: 'rgba(98, 98, 98, 0.8)'
				},
				foreground: {
					default: '#cccccc',
				},
			},
      paneHeader: {
        background: {
          default: '#181818',
          success: '#50fa7b',
          notice: '#f1fa8c',
          warning: '#ffb86c',
          danger: '#ff5555',
          surprise: '#35A0F3',
          info: '#8be9fd'
        }
      },
			pane: {
				background: {
					default: '#181818',
					success: '#9CDCFE',
					notice: '#CE9178',
					warning: '#f1fa8c',
					danger: '#ff5555',
					surprise: '#35A0F3',
					info: '#B5CEA8'
				},
				highlight: {
					default: '#8F8F8F',
					xs: '#37373D',
					md: '#ffffff12',
					lg: '#A9A9A9',
					xl: '#6D6D6D'
				},
			},
			transparentOverlay: {
				background: {
					default: 'rgba(40, 40, 40, 0.5)',
				}
			},
			dialog: {
				background: {
					default: '#181818',
          success: '#9CDCFE',
					notice: '#CE9178',
					warning: '#f1fa8c',
					danger: '#ff5555',
					surprise: '#35A0F3',
					info: '#B5CEA8'
				}
			},
			link: {
				background: {
					surprise: '#CE9178',
				},
			},
			sidebarList: {
				background: {
					success: '#B5CEA8',
					surprise: '#35A0F3',
				},
				foreground: {
					default: '#cccccc',
				},
				highlight: {
					default: '#cccccc',
					xs: '#37373D',
				},
			},
		}
	}
}
