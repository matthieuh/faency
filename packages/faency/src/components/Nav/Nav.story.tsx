import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { Box } from '../Box'
import { Nav, NavContainer, NavItem, NavGroup, NavGroups } from './Nav'
import { Text } from '../Text'
import breakpoints from '../../breakpoints'

const Container = styled(NavContainer)`
  display: flex;
  flex-grow: 1;
  margin: 0 12px;

  @media (min-width: ${breakpoints.laptop}) {
    margin: 0 24px;
  }

  @media (min-width: ${breakpoints.laptopL}) {
    max-width: ${breakpoints.laptopL};
    margin: 0 auto;
  }
`

const getBase64Logo = () =>
  `PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDAwcHgiIGhlaWdodD0iODBweCIgdmlld0JveD0iMCAwIDQwMCA4MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5UcmFlZmlrTGFicy1ob3Jpem9udGFsLWxvZ28td2hpdGU8L3RpdGxlPgogICAgPGcgaWQ9IlRyYWVmaWtMYWJzLWhvcml6b250YWwtbG9nby13aGl0ZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IlRyYWVmaWtMYWJzLUxvZ28iIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMy42MTMyODM1LDAuNDk2MDA2MzY5IEMyNC43OTg1MDY2LC0wLjE2NTMxNDc2NiAyNi4yNDY3NDMxLC0wLjE2NTMzNjc4OSAyNy40MzE5ODY3LDAuNDk1OTQ4MyBMMjcuNDMxOTg2NywwLjQ5NTk0ODMgTDYwLjU2Njg1MTUsMTguOTgyOTQyMiBDNjEuMDI3ODQyNiwxOS4yNDAxNjU4IDYxLjU2OTUzOTIsMTkuMzE2OTY3MiA2Mi4wODQ5NzkyLDE5LjE5ODE4MDUgQzYyLjgwODc0NTMsMTkuMDMxMzgzNiA2My40MDU1OTU4LDE4Ljk0NzM1NjggNjMuODc5MDg5NiwxOC45NDczNTY4IEM2Ny4zNDU0MTM0LDE4Ljk0NzM1NjggNzAuMTgxODE4MiwyMS4xODgzNDMzIDcwLjE4MTgxODIsMjMuOTg0Mzc4MiBDNzAuMTgxODE4MiwyNi43ODAzMzQgNjcuMzQ1MzYyMiwyOS4wMjEzOTk2IDYzLjg3OTA4OTYsMjkuMDIxMzk5NiBDNjMuMzc0MDA4NywyOS4wMjEzOTk2IDYyLjczODE1NjksMjguOTI2MTYzIDYxLjk2Nzc2NDEsMjguNzM3MTE3IEM2MS40NDQ1MzY4LDI4LjYwODcyMjEgNjAuODkxNTE5NywyOC42ODI5MjkgNjAuNDIxNzI3MSwyOC45NDQ1Njg0IEw2MC40MjE3MjcxLDI4Ljk0NDU2ODQgTDEzLjAyMTM3MTYsNTUuMzQzMDI4NCBDMTIuNzk3OTY3NCw1NS40Njc0NjcgMTIuNjQ3MTM0OCw1NS42ODgyOTc0IDEyLjYxNDk1NzgsNTUuOTE5NDk4NyBMMTIuNjE0OTU3OCw1NS45MTk0OTg3IEwxMi42MDU2OTczLDU2LjA0NjU2MzMgQzEyLjYwNTY5NzMsNTYuMzc0MzcxNCAxMi43ODQxOTE0LDU2LjY3Njc2ODEgMTMuMDcyNzYzMyw1Ni44Mzc3ODI2IEwxMy4wNzI3NjMzLDU2LjgzNzc4MjYgTDQzLjYyMTI3NjgsNzMuODgxOTExIEM0NC4yNjU5NDAxLDc0LjI0MTU5MjEgNDUuMDUzNjc4Nyw3NC4yNDE1OTE5IDQ1LjY5ODM0MTgsNzMuODgxOTEwMyBMNDUuNjk4MzQxOCw3My44ODE5MTAzIEw1Ny4wMTcxOTkzLDY3LjU2NjY5ODQgQzU3LjQ1Njk1OTcsNjcuMzIxMzM5NiA1Ny42MTI0Njk1LDY2Ljc2OTY4ODMgNTcuMzY0NjE2OCw2Ni4zMzQ0OTg1IEM1Ny4yODI2OTc5LDY2LjE5MDY2MTkgNTcuMTYyNTYwNCw2Ni4wNzE3NTAyIDU3LjAxNzIxOSw2NS45OTA2NTQxIEw1Ny4wMTcyMTksNjUuOTkwNjU0MSBMNDMuMjk0MDk2NCw1OC4zMzM1NzA3IEM0Mi4wMDA5OTI0LDU3LjYxMjA1ODIgNDEuNTQzNjQxNSw1NS45ODk1MDkxIDQyLjI3MjY1MTMsNTQuNzA5NTU4IEM0Mi41MTM1Njc0LDU0LjI4NjU3MjMgNDIuODY2ODQzMyw1My45MzY5MjM0IDQzLjI5NDE4OSw1My42OTg0OTk2IEw0My4yOTQxODksNTMuNjk4NDk5NiBMNTcuMjUxNDMzMyw0NS45MTE1MDM4IEM1Ny40MjYwMjU3LDQ1LjgxNDA4NzYgNTcuNTQzODcwNCw0NS42NDEzOTg5IDU3LjU2ODU4NjQsNDUuNDY0Nzc2NCBMNTcuNTY4NTg2NCw0NS40NjQ3NzY0IEw1Ny41NzYyNDEsNDUuMzYxMzA3MyBDNTcuNTc2MjQxLDQyLjU2NTM2NzUgNjAuNDEyNzk1NCw0MC4zMjQyODU4IDYzLjg3OTA4OTYsNDAuMzI0Mjg1OCBDNjcuMzQ1MzYyMiw0MC4zMjQyODU4IDcwLjE4MTgxODIsNDIuNTY1MzUxNSA3MC4xODE4MTgyLDQ1LjM2MTMwNzMgQzcwLjE4MTgxODIsNDcuMDc5NzAzNyA2OS4xMTA0NzIxLDQ4LjU4ODQ1MTQgNjcuNDc5OTg0Nyw0OS40OTYxODM0IEw2Ny40Nzk5ODQ3LDQ5LjQ5NjE4MzQgTDY3LjMxMjI2NDgsNDkuNTg2NDA4IEM2Ni4zMjI4ODc5LDUwLjEwMDQ1NDUgNjUuMTQyODUzNSw1MC4zOTgzMjg3IDYzLjg3OTA4OTYsNTAuMzk4MzI4NyBDNjMuMzU1NzM2OCw1MC4zOTgzMjg3IDYyLjY5NzU5ODMsNTAuMjk2MzIxNCA2MS45MDA4MDQyLDUwLjA5Mzg0MTIgQzYxLjM3MjI4MzgsNDkuOTU5NTU5MiA2MC44MTE3ODQ2LDUwLjAzMjYzNTMgNjAuMzM2NDU5MSw1MC4yOTc3OTU1IEw2MC4zMzY0NTkxLDUwLjI5Nzc5NTUgTDUxLjQ5OTQ0MjQsNTUuMjI3NTIxMyBDNTEuMDU5NjY1Myw1NS40NzI4NTA3IDUwLjkwNDExODEsNTYuMDI0NDkxNyA1MS4xNTE5NDEyLDU2LjQ1OTY5OCBDNTEuMjMzODY4Nyw1Ni42MDM1NzIzIDUxLjM1NDAzMzEsNTYuNzIyNTEyMyA1MS40OTk0MTEzLDU2LjgwMzYxODkgTDUxLjQ5OTQxMTMsNTYuODAzNjE4OSBMNjUuMjIzMTUxOCw2NC40NjAxMDAyIEM2Ni41MTYyOTQzLDY1LjE4MTU0NSA2Ni45NzM3MzE5LDY2LjgwNDA3MDEgNjYuMjQ0NzkwNSw2OC4wODQwNTk0IEM2Ni4wMDM4OTgyLDY4LjUwNzA1NTcgNjUuNjUwNjQzMiw2OC44NTY3MjE3IDY1LjIyMzMxMyw2OS4wOTUxNjc4IEw2NS4yMjMzMTMsNjkuMDk1MTY3OCBMNDYuNTY5MjI2OSw3OS41MDM5NjY5IEM0NS4zODM5NjIsODAuMTY1MzMzMiA0My45MzU2NTU4LDgwLjE2NTM0NTEgNDIuNzUwMzc5OSw3OS41MDM5OTgyIEw0Mi43NTAzNzk5LDc5LjUwMzk5ODIgTDkuNjU0MzExMTIsNjEuMDM3NDI4NyBDOS4xOTA4NDYzNyw2MC43Nzg4NTkxIDguNjQ1OTQ3MzIsNjAuNzAyNjU3MyA4LjEyODI2MDY1LDYwLjgyNDAyNjEgQzcuMzkyMDI5NSw2MC45OTY2MzE1IDYuNzg0NzY0MDMsNjEuMDgzNTg0NyA2LjMwMjg0ODY0LDYxLjA4MzU4NDcgQzIuODM2NTU0MzksNjEuMDgzNTg0NyAwLDU4Ljg0MjUwMzEgMCw1Ni4wNDY1NjMzIEMwLDUzLjI1MDU0NDQgMi44MzY1MDMyMyw1MS4wMDk1NDE5IDYuMzAyODQ4NjQsNTEuMDA5NTQxOSBDNi43OTk1NzEwNiw1MS4wMDk1NDE5IDcuNDI1MTUyNzEsNTEuMTAxNzQ2NCA4LjE4MzMyMDA3LDUxLjI4NDc3NzQgQzguNzA0MzYyOTgsNTEuNDEwNTg1MSA5LjI1NDI0NTg0LDUxLjMzNTc0MjQgOS43MjE2NTA1OSw1MS4wNzU0MDg1IEw5LjcyMTY1MDU5LDUxLjA3NTQwODUgTDU3LjE5MTMxNTksMjQuNjM1ODY5NiBDNTcuMzk4MTk1MiwyNC41MjA2NDMxIDU3LjUzNzg2OTgsMjQuMzE2MTQ3OCA1Ny41Njc1MjI4LDI0LjEwMzQ0OTggTDU3LjU2NzUyMjgsMjQuMTAzNDQ5OCBMNTcuNTc2MjQxLDIzLjk4NDM3ODIgQzU3LjU3NjI0MSwyMy42Mzc4MzI3IDU3LjM4NzU0ODEsMjMuMzE4MTYwNCA1Ny4wODI0Nzg1LDIzLjE0Nzk1NDMgTDU3LjA4MjQ3ODUsMjMuMTQ3OTU0MyBMMjYuNTYwNjk4OCw2LjExODE3Mjg4IEMyNS45MTYwMjM0LDUuNzU4NDcyOTggMjUuMTI4MjYxNCw1Ljc1ODQ3MjMzIDI0LjQ4MzU4NTQsNi4xMTgxNzExNiBMMjQuNDgzNTg1NCw2LjExODE3MTE2IEwxMy4xNjk1Mjc4LDEyLjQzMDg4MjEgQzEyLjcyOTc3MDQsMTIuNjc2MjQ2MSAxMi41NzQyNjczLDEzLjIyNzg5OTMgMTIuODIyMTI1MiwxMy42NjMwODYxIEMxMi45MDQwNDQ2LDEzLjgwNjkxOTUgMTMuMDI0MTgxMSwxMy45MjU4MjgzIDEzLjE2OTUyMDYsMTQuMDA2OTIyNiBMMTMuMTY5NTIwNiwxNC4wMDY5MjI2IEwyNi44OTQ5NTYzLDIxLjY2NTIzMjMgQzI4LjE4ODA2MjksMjIuMzg2NzQwMyAyOC42NDU0MTk2LDI0LjAwOTI4NzggMjcuOTE2NDE0NSwyNS4yODkyNDE1IEMyNy42NzU1MzUsMjUuNzEyMTY2NSAyNy4zMjIzMjc1LDI2LjA2MTc3NzUgMjYuODk1MDYzNywyNi4zMDAyMDEyIEwyNi44OTUwNjM3LDI2LjMwMDIwMTIgTDEyLjk0MjUzNywzNC4wODYwNTQ2IEMxMi43NjE0NzU0LDM0LjE4NzA5MzggMTIuNjM5MjY3MiwzNC4zNjYxOTE3IDEyLjYxMzU2MzUsMzQuNTUwMDc3MiBMMTIuNjEzNTYzNSwzNC41NTAwNzcyIEwxMi42MDU2OTczLDM0LjY1NjY4MTQgQzEyLjYwNTY5NzMsMzcuNDUyNjIxMiA5Ljc2OTE0Mjg4LDM5LjY5MzcwMjggNi4zMDI4NDg2NCwzOS42OTM3MDI4IEM0LjY3ODAyMzIxLDM5LjY5MzcwMjggMy4xOTE1NjgzNiwzOS4yMDEyNzc3IDIuMDcwNzc4OTcsMzguMzkwMTAzIEwyLjA3MDc3ODk3LDM4LjM5MDEwMyBMMS45MjM1MjcyNCwzOC4yODAwNzI3IEMwLjczODk5MzgyNSwzNy4zNjYzMTU0IDAsMzYuMDgzNzc1NyAwLDM0LjY1NjY4MTQgQzAsMzEuODYwNjYyNSAyLjgzNjUwMzIzLDI5LjYxOTY2IDYuMzAyODQ4NjQsMjkuNjE5NjYgQzYuODIyMDI2OTEsMjkuNjE5NjYgNy40NzUwNzA3MywyOS43MjAwOTk5IDguMjY1ODIyOTUsMjkuOTE5NDY5MiBDOC43OTMyODc4NCwzMC4wNTI0MzAzIDkuMzUyMjMxNzgsMjkuOTc5MDE0IDkuODI2MzY2OTEsMjkuNzE0NDk0MyBMOS44MjYzNjY5MSwyOS43MTQ0OTQzIEwxOC42ODc1NTY4LDI0Ljc3MDg0MjQgQzE5LjEyNzMyNDUsMjQuNTI1NDk2MyAxOS4yODI4NTA1LDIzLjk3Mzg0OTUgMTkuMDM1MDEwNiwyMy41Mzg2NTI1IEMxOC45NTMwODUxLDIzLjM5NDc5NDcgMTguODMyOTMwNywyMy4yNzU4Njc3IDE4LjY4NzU2NjgsMjMuMTk0NzY2OSBMMTguNjg3NTY2OCwyMy4xOTQ3NjY5IEw0Ljk2Mjg2NjU5LDE1LjUzNzU0MTEgQzMuNjY5NzMyNTcsMTQuODE2MDgxMyAzLjIxMjMxNDE1LDEzLjE5MzU1MDkgMy45NDEyNzA2NiwxMS45MTM1NyBDNC4xODIxNjkwMSwxMS40OTA1NzQ2IDQuNTM1NDMwMjEsMTEuMTQwOTExNSA0Ljk2Mjc2NTgxLDEwLjkwMjQ3MDIgTDQuOTYyNzY1ODEsMTAuOTAyNDcwMiBaIE05NC44NTQ4NDg4LDEzLjA5MDkwOTEgQzk1Ljc0Njg0OTUsMTMuMDkwOTA5MSA5Ni41MTgzMjA2LDEzLjM3OTgyMjEgOTcuMTY5MjYyMywxMy45NTc2NDggQzk3Ljg0NDI4NDEsMTQuNTU5NTQ3NSA5OC4xODE4MTgyLDE1LjM2NjA5NDkgOTguMTgxODE4MiwxNi4zNzcyOTA0IEw5OC4xODEzNjM2LDI0LjcyNjkwOTEgTDEwNi4xODE4MTgsMjQuNzI3MjcyNyBDMTA3LjMzNDQxMiwyNC43MjcyNzI3IDEwOC4yNzgyNjMsMjUuNjIxMDEwNSAxMDguMzU4MTU4LDI2Ljc1MzI3NDQgTDEwOC4zNjM2MzYsMjYuOTA5MDkwOSBDMTA4LjM2MzYzNiwyOC4wNjE2ODUyIDEwNy40Njk4OTksMjkuMDA1NTM1OCAxMDYuMzM3NjM1LDI5LjA4NTQzMDkgTDEwNi4xODE4MTgsMjkuMDkwOTA5MSBMOTguMTgxMzYzNiwyOS4wOTA5MDkxIEw5OC4xODE4MTgyLDUwLjM3NTk2OTggTDk4LjE4MzAxODIsNTAuODI5NDMwNSBDOTguMTkzNDM0Myw1Mi43NjQ1MjMzIDk4LjI3MTY1NTksNTQuMzEwODY4NiA5OC40MTc2ODc2LDU1LjQ2ODQ3MDQgQzk4LjYwMTEyOTksNTYuNzQxNTQ2OSA5OC43NzE0ODI4LDU4LjAwMDg3ODIgOTkuMjQzMjQ0MSw1OC42NjQwMTQgQzk5Ljc0MTE3NzEsNTkuMzUzNTcyNSAxMDAuMzA0NjQ4LDU5Ljg1OTYzOTUgMTAwLjkzMzY1OCw2MC4wNDUzNTUxIEMxMDEuNDk5NzM2LDYwLjIzNjI3NyAxMDIuMjY3NDk4LDYwLjM0MTMwNTEgMTAzLjIzNjk0Nyw2MC4zNjA0Mzk1IEwxMDMuNTY3NTY2LDYwLjM2MzYzNjQgTDEwNy4zNDE1MjIsNjAuMzYzNjM2NCBDMTA4LjcxNTY4MSw2MC40MDExNTM1IDEwOS44MTgxODIsNjEuNTI2MzcwNyAxMDkuODE4MTgyLDYyLjkwOTA5MDkgQzEwOS44MTgxODIsNjQuMjAyNDQxNCAxMDguODUzNTkyLDY1LjI3MDQ5OTcgMTA3LjYwNDU2NSw2NS40MzMxMTE2IEwxMDcuNDQwMDkyLDY1LjQ0OTEzMTEgTDEwNy4zODAwOTEsNjUuNDUxNTQ1NSBMMTA3LjM4MDgzOCw2NS40NTQ1NDU1IEwxMDIuMTUyMzMzLDY1LjQ1NDU0NTUgTDEwMS43NTA0ODcsNjUuNDUwMDcyMyBDOTguNDI5ODg0Miw2NS4zNzU1MjAzIDk1LjgxMTk5MjIsNjQuMzY5MDcwOCA5My44OTY4MDYyLDYyLjQzMDg3MzIgQzkxLjk2OTIzNzEsNjAuNTA1NzM0NCA5MC45NzQzNzg1LDU3LjI4ODk3NTMgOTAuOTEyMTk5OCw1Mi43ODA1ODY3IEw5MC45MDkwOTA5LDUyLjMyNTQ0MjQgTDkwLjkwODM2MzYsMjkuMDkwOTA5MSBMODUuODE4MTgxOCwyOS4wOTA5MDkxIEM4NC42NjU1ODc2LDI5LjA5MDkwOTEgODMuNzIxNzM2OSwyOC4xOTcxNzEzIDgzLjY0MTg0MTgsMjcuMDY0OTA3NSBMODMuNjM2MzYzNiwyNi45MDkwOTA5IEM4My42MzYzNjM2LDI1Ljc1NjQ5NjYgODQuNTMwMTAxNSwyNC44MTI2NDYgODUuNjYyMzY1MywyNC43MzI3NTA5IEw4NS44MTgxODE4LDI0LjcyNzI3MjcgTDkxLjA1OTM2MzYsMjQuNzI2OTA5MSBMOTEuNjM2MzYzNiwxNi4zNzcyOTA0IEM5MS42MzYzNTg1LDE1LjMxNzk0MjggOTEuOTQ5NzcxMiwxNC40OTkzNTYgOTIuNTc2NTk2NywxMy45MjE1MyBDOTMuMjAzNDA2NywxMy4zNjc3ODI3IDkzLjk2MjgyNzUsMTMuMDkwOTA5MSA5NC44NTQ4NDg4LDEzLjA5MDkwOTEgWiBNMjQ1LjE1MTE3OCw3LjI3MjcyNzI3IEMyNDYuMTE1NTA2LDcuMjcyNzI3MjcgMjQ2Ljk0NTkxMiw3LjU5NDY5ODk0IDI0Ny42NDIzOSw4LjIzODUyMjA4IEMyNDguMzEzOTcsOC44MzY0MzEyIDI0OC42NzM3NjUsOS42NDI0OTM2OCAyNDguNzIxNzM3LDEwLjY1NjcxMjMgTDI0OC43MjcyNzMsMTAuODk0NDU3OCBMMjQ4LjcyNzI3Myw0Mi42OTkzNDA5IEwyNjcuMDEwOTU3LDI2LjIwNzc2NjcgQzI2Ny42MDE1OTEsMjUuNzA1NjU4OSAyNjguMjMyNTI0LDI1LjQ1NDU0NTUgMjY4LjkwMzc2MywyNS40NTQ1NDU1IEMyNjkuNzYyODczLDI1LjQ1NDU0NTUgMjcwLjUxNDYyNSwyNS43ODQ5NDUzIDI3MS4xNTkwMTksMjYuNDQ1NjI2IEMyNzEuODMwMTg4LDI3LjEwNjM4NDQgMjcyLjE2NTc5MywyNy44NDYzOTA0IDI3Mi4xNjU4MjgsMjguNjY1NjQ1NiBDMjcyLjE2NTc5NiwyOS4zNDQwMTgxIDI3MS44OTUwNzMsMjkuOTY2ODQwNiAyNzEuMzUzNjU5LDMwLjUzNDExMzcgTDI3MS4xOTkyOSwzMC42ODc0NDczIEwyNTYuNTgwNDAzLDQzLjU3MTQ5NDMgTDI3Mi41Njg1NTUsNjAuMTQyMzUyNyBDMjczLjE1OTE3Nyw2MC43NTAyMTggMjczLjQ1NDU0NSw2MS40MzczNjcgMjczLjQ1NDU0NSw2Mi4yMDM3OTk1IEMyNzMuNDU0NTQ1LDYzLjA0OTUyNyAyNzMuMTA1NDgxLDYzLjgwMjc0MzcgMjcyLjQwNzQ2NSw2NC40NjM0NjEgQzI3MS43MzYyMjEsNjUuMTI0MTg0IDI3MC45NTc2MjQsNjUuNDU0NTQ1NSAyNzAuMDcxNjYyLDY1LjQ1NDU0NTUgQzI2OS4yMDQyMjYsNjUuNDU0NTQ1NSAyNjguNDUxMjAxLDY1LjEzOTI3NjQgMjY3LjgxMjU4Niw2NC41MDg3MzgzIEwyNjcuNjU1MzE2LDY0LjM0NDUzNTYgTDI0OC43MjcyNzMsNDQuNTIyOTMxMyBMMjQ4LjcyNzI3Myw2MS43OTI1Nzc4IEMyNDguNzI3MjczLDYyLjkxOTMzODQgMjQ4LjM1MjIzNSw2My44MTgwNjI3IDI0Ny42MDIyMTEsNjQuNDg4NzUwNiBDMjQ2Ljg3ODk0Miw2NS4xMzI2MTM5IDI0Ni4wMjE3NTIsNjUuNDU0NTQ1NSAyNDUuMDMwNjQsNjUuNDU0NTQ1NSBDMjQ0LjAzOTUwNSw2NS40NTQ1NDU1IDI0My4xOTU3MDQsNjUuMTQ2MDI5MSAyNDIuNDk5MjQ5LDY0LjUyODk5NjQgQzI0MS44NTI1MjQsNjMuOTMxMTIzNCAyNDEuNTA2MDY5LDYzLjEwMTkzMDUgMjQxLjQ1OTg3Niw2Mi4wNDE0MTc3IEwyNDEuNDU0NTQ1LDYxLjc5MjU3NzggTDI0MS40NTQ1NDUsMTAuODk0NDU3OCBDMjQxLjQ1NDU0NSw5Ljc2NzczNDk3IDI0MS44MTYxNjUsOC44ODI0MjQyMSAyNDIuNTM5NDI4LDguMjM4NTIyMDggQzI0My4yODk0NjQsNy41OTQ2OTg5NCAyNDQuMTYwMDQzLDcuMjcyNzI3MjcgMjQ1LjE1MTE3OCw3LjI3MjcyNzI3IFogTTIzMC42MDU3MjQsMjQuNzI3MjcyNyBDMjMxLjU3MDA1MSwyNC43MjcyNzI3IDIzMi40MDA0NTcsMjUuMDYxMTY5MyAyMzMuMDk2OTM1LDI1LjcyODgzNzcgQzIzMy43Njg1MTUsMjYuMzQ4ODkxNiAyMzQuMTI4MzEsMjcuMTg0ODA4MyAyMzQuMTc2MjgzLDI4LjIzNjU5MDUgTDIzNC4xODE4MTgsMjguNDgzMTQxNCBMMjM0LjE4MTgxOCw2MS42NTY5NDkzIEMyMzQuMTgxODE4LDYyLjgyNTQ0MTggMjMzLjgwNjc4LDYzLjc1NzQ1MjIgMjMzLjA1Njc1Niw2NC40NTI5ODA1IEMyMzIuMzMzNDg4LDY1LjEyMDY5MDUgMjMxLjQ3NjI5Nyw2NS40NTQ1NDU1IDIzMC40ODUxODYsNjUuNDU0NTQ1NSBDMjI5LjQ5NDA1MSw2NS40NTQ1NDU1IDIyOC42NTAyNSw2NS4xMzQ2MDI2IDIyNy45NTM3OTQsNjQuNDk0NzE2OCBDMjI3LjMwNzA3LDYzLjg3NDcwMDQgMjI2Ljk2MDYxNSw2My4wMTQ3OTY2IDIyNi45MTQ0MjEsNjEuOTE1MDA1NiBMMjI2LjkwOTA5MSw2MS42NTY5NDkzIEwyMjYuOTA5MDkxLDI4LjQ4MzE0MTQgQzIyNi45MDkwOTEsMjcuMzE0Njg4MSAyMjcuMjcwNzExLDI2LjM5NjU4ODEgMjI3Ljk5Mzk3NCwyNS43Mjg4Mzc3IEMyMjguNzQ0MDA5LDI1LjA2MTE2OTMgMjI5LjYxNDU4OSwyNC43MjcyNzI3IDIzMC42MDU3MjQsMjQuNzI3MjcyNyBaIE0yODIuMzYzNjM2LDcuMjcyNzI3MjcgQzI4Mi44MzExNjksNy4yNzI3MjcyNyAyODMuMjIwNzc5LDcuNDQ5MDM1ODEgMjgzLjUzMjQ2OCw3LjgwMTY1Mjg5IEMyODMuODA1MTk1LDguMTEwMTkyODQgMjgzLjk1ODYwNCw4LjQ5MTQxNzY3IDI4My45OTI2OTUsOC45NDUzMjc0IEwyODQsOS4xNDQzMTAyNCBMMjg0LDYzLjU4Mjk2MjUgTDI4My45OTI2OTUsNjMuNzgxOTQ1MyBDMjgzLjk1ODYwNCw2NC4yMzU4NTUxIDI4My44MDUxOTUsNjQuNjE3MDc5OSAyODMuNTMyNDY4LDY0LjkyNTYxOTggQzI4My4yMjA3NzksNjUuMjc4MjM2OSAyODIuODMxMTY5LDY1LjQ1NDU0NTUgMjgyLjM2MzYzNiw2NS40NTQ1NDU1IEMyODEuODQ0MTU2LDY1LjQ1NDU0NTUgMjgxLjQ0MTU1OCw2NS4yOTE3OTkxIDI4MS4xNTU4NDQsNjQuOTY2MzA2NCBDMjgwLjkwMTg3Niw2NC42NzY5Nzk2IDI4MC43NjA3ODIsNjQuMjgwNDk0NyAyODAuNzMyNTY0LDYzLjc3Njg1MTcgTDI4MC43MjcyNzMsNjMuNTgyOTYyNSBMMjgwLjcyNzI3Myw5LjE0NDMxMDI0IEwyODAuNzMyNTY0LDguOTUwNDIxMDcgQzI4MC43NjA3ODIsOC40NDY3NzgwNiAyODAuOTAxODc2LDguMDUwMjkzMTQgMjgxLjE1NTg0NCw3Ljc2MDk2NjMxIEMyODEuNDQxNTU4LDcuNDM1NDczNjIgMjgxLjg0NDE1Niw3LjI3MjcyNzI3IDI4Mi4zNjM2MzYsNy4yNzI3MjcyNyBaIE0yMjAuODM1MzgzLDcuMjcyNzI3MjcgTDIyMC44MzQ2MzYsNy4yNzU3MjcyNyBMMjIwLjg5NDYzNyw3LjI3ODE0MTY0IEMyMjIuMjIyNDM2LDcuMzY0MzI0MjYgMjIzLjI3MjcyNyw4LjQ2ODU5ODcyIDIyMy4yNzI3MjcsOS44MTgxODE4MiBDMjIzLjI3MjcyNywxMS4yMDA5MDIgMjIyLjE3MDIyNiwxMi4zMjYxMTkyIDIyMC43OTYzNCwxMi4zNjI3MTc1IEwyMjAuNzk2MDY3LDEyLjM2MzYzNjQgTDIxNy4wMjIxMTIsMTIuMzYzNjM2NCBDMjE1Ljg5NTE0NywxMi4zNjM2ODg0IDIxNS4wMTcxNzksMTIuNDY5NzgyMiAyMTQuMzg4MjAzLDEyLjY4MTkxNzYgQzIxMy43NTkxOTQsMTIuODY3NjMzMiAyMTMuMTk1NzIzLDEzLjM3MzcwMDIgMjEyLjY5Nzc5LDE0LjA2MzI1ODcgQzIxMi4yMjYwMjgsMTQuNzI2Mzk0NSAyMTIuMDU1Njc1LDE1Ljk4NTcyNTkgMjExLjg3MjIzMywxNy4yNTg4MDIzIEMyMTEuNzI2MjAxLDE4LjQxNjQwNDEgMjExLjY0Nzk4LDE5Ljk2Mjc0OTQgMjExLjYzNzU2NCwyMS44OTc4NDIyIEwyMTEuNjM2MzY0LDIyLjM1MTMwMjkgTDIxMS42MzU2MzYsMjQuNzI2NzI3MyBMMjE4LjE4MTgxOCwyNC43MjcyNzI3IEMyMTkuMzg2ODAzLDI0LjcyNzI3MjcgMjIwLjM2MzYzNiwyNS43MDQxMDYgMjIwLjM2MzYzNiwyNi45MDkwOTA5IEMyMjAuMzYzNjM2LDI4LjExNDA3NTggMjE5LjM4NjgwMywyOS4wOTA5MDkxIDIxOC4xODE4MTgsMjkuMDkwOTA5MSBMMjExLjYzNTYzNiwyOS4wOTA3MjczIEwyMTEuNjM2MzY0LDYxLjc5MjU3NzggQzIxMS42MzYzNjQsNjIuODM4ODU1NSAyMTEuMzEyOTg5LDYzLjY4ODUxIDIxMC42NjYyODEsNjQuMzQxNTQxNCBMMjEwLjUxMTMwMiw2NC40ODg3NTA2IEMyMDkuNzg4MDMzLDY1LjEzMjYxMzkgMjA4LjkzMDg0Myw2NS40NTQ1NDU1IDIwNy45Mzk3MzEsNjUuNDU0NTQ1NSBDMjA2Ljk0ODU5Niw2NS40NTQ1NDU1IDIwNi4xMDQ3OTUsNjUuMTQ2MDI5MSAyMDUuNDA4MzQsNjQuNTI4OTk2NCBDMjA0Ljc2MTYxNSw2My45MzExMjM0IDIwNC40MTUxNiw2My4xMDE5MzA1IDIwNC4zNjg5NjYsNjIuMDQxNDE3NyBMMjA0LjM2MzYzNiw2MS43OTI1Nzc4IEwyMDQuMzYzNjM2LDI5LjA5MDcyNzMgTDE5OC41NDU0NTUsMjkuMDkwOTA5MSBDMTk3LjM0MDQ3LDI5LjA5MDkwOTEgMTk2LjM2MzYzNiwyOC4xMTQwNzU4IDE5Ni4zNjM2MzYsMjYuOTA5MDkwOSBDMTk2LjM2MzYzNiwyNS43MDQxMDYgMTk3LjM0MDQ3LDI0LjcyNzI3MjcgMTk4LjU0NTQ1NSwyNC43MjcyNzI3IEwyMDQuMzYyNjM2LDI0LjcyNjcyNzMgTDIwNC4zNjM2MzYsMjAuNDAxODMwMyBDMjA0LjM2MzYzNiwxNS42NTQxODMxIDIwNS4zNTk1MywxMi4yODU3MDk2IDIwNy4zNTEzNTIsMTAuMjk2Mzk5NSBDMjA5LjI2NjUzOCw4LjM1ODIwMTkzIDIxMS44ODQ0Myw3LjM1MTc1MjQ0IDIxNS4yMDUwMzMsNy4yNzcyMDA0IEwyMTUuNjA2ODc4LDcuMjcyNzI3MjcgTDIyMC44MzUzODMsNy4yNzI3MjcyNyBaIE0zMDcuNTk3MjIxLDI0LjcyNzI3MjcgQzMxNi40NzE0NDgsMjQuNzI3MjcyNyAzMjAuOTY4NTIzLDI5LjQyODcxODIgMzIxLjA4ODQ0NSwzOC44MzE2MDkxIEwzMjEuMDkwOTA5LDM5LjIyMDY3NTkgTDMyMS4wOTA5MDksNjMuMzQ5MzU4NCBMMzIxLjA4NTQyMyw2My41NDIyODM5IEMzMjEuMDU2MTYyLDY0LjA0MzQyMzcgMzIwLjkwOTg1Niw2NC40Mzc5MzggMzIwLjY0NjUwNiw2NC43MjU4MjY5IEMzMjAuMzUwMjM4LDY1LjA0OTcwMTggMzE5LjkzMjc2OCw2NS4yMTE2MzkzIDMxOS4zOTQwOTgsNjUuMjExNjM5MyBDMzE4Ljg1NTQyOCw2NS4yMTE2MzkzIDMxOC40MjQ0OTIsNjUuMDM2MjA3IDMxOC4xMDEyODksNjQuNjg1MzQyNSBDMzE3LjgxODQ4OCw2NC4zNzgzMzYgMzE3LjY1OTQxMiw2My45OTkwMDYgMzE3LjYyNDA2MSw2My41NDczNTIzIEwzMTcuNjE2NDg2LDYzLjM0OTM1ODQgTDMxNy42MTY0ODYsNTcuNjgxNTQ3MSBMMzE3LjQyNTAwNSw1OC4wNjg4OTYxIEMzMTYuMjQ5OTI4LDYwLjM2NDcyOTggMzE0LjYwMzQ3Nyw2Mi4xNTE4NzM0IDMxMi40ODU2NTMsNjMuNDMwMzI3MSBDMzEwLjI1MDE3MSw2NC43Nzk4MDYgMzA3LjcwNDk1NSw2NS40NTQ1NDU1IDMwNC44NTAwMDMsNjUuNDU0NTQ1NSBDMzAyLjM3MjEyLDY1LjQ1NDU0NTUgMzAwLjEwOTcwNSw2NC45NDE3NDM1IDI5OC4wNjI3NTgsNjMuOTE2MTM5NSBDMjk2LjAxNTgxMSw2Mi44OTA1MzU2IDI5NC4zODYzMzQsNjEuNTAwNTcyMyAyOTMuMTc0MzI2LDU5Ljc0NjI0OTggQzI5MS45NjIzMTgsNTcuOTkxOTI3MiAyOTEuMzI5MzgxLDU2LjAzNTE4MjggMjkxLjI3NTUxMyw1My44NzYwMTY2IEMyOTEuMjIxNjQ2LDUwLjkwNzE2MzEgMjkxLjk0ODg1MSw0OC42MTMwNDkgMjkzLjQ1NzEyOCw0Ni45OTM2NzQzIEMyOTQuOTY1NDA0LDQ1LjM3NDI5OTcgMjk3LjQ5NzE1NCw0NC4yMTM3NDc4IDMwMS4wNTIzNzgsNDMuNTEyMDE4OCBDMzA0LjQ4NTAwNyw0Mi44MzQ0ODczIDMwOS4yNDgzNjMsNDIuNDg0MDQgMzE1LjM0MjQ0Niw0Mi40NjA2NzY5IEwzMTYuMDAwNDc2LDQyLjQ1OTQyNTMgTDMxNy42MTY0ODYsNDIuNDU5NDI1MyBMMzE3LjYxNjQ4NiwzOS4wNTg3Mzg1IEwzMTcuNjEzMzI3LDM4LjYzNzE3OSBDMzE3LjU1ODU3NCwzNS4wMjA3MjM3IDMxNi43OTIwMjIsMzIuMzY3ODIyMiAzMTUuMzEzNjcxLDMwLjY3ODQ3NDYgQzMxMy43Nzg0NjEsMjguOTI0MTUyMSAzMTEuMzY3OTEyLDI4LjA0Njk5MDggMzA4LjA4MjAyNCwyOC4wNDY5OTA4IEMzMDUuNDk2NDA3LDI4LjA0Njk5MDggMzAzLjE5MzU5MiwyOC4zODQzNjA1IDMwMS4xNzM1NzgsMjkuMDU5MDk5OSBDMjk5LjE1MzU2NSwyOS43MzM4Mzk0IDI5Ny41NTEwMjEsMzAuNTAzMDQyNCAyOTYuMzY1OTQ3LDMxLjM2NjcwODggQzI5Ni4xNTA0NzksMzEuNTI4NjQ2MyAyOTUuNzA2MDc2LDMxLjgzOTAyNjQgMjk1LjAzMjczOCwzMi4yOTc4NDkzIEMyOTQuMzU5NCwzMi43NTY2NzIxIDI5My44MDcyNjMsMzIuOTg2MDgzNSAyOTMuMzc2MzI3LDMyLjk4NjA4MzUgQzI5Mi45OTkyNTgsMzIuOTg2MDgzNSAyOTIuNjYyNTg5LDMyLjgzNzY0MDggMjkyLjM2NjMyMSwzMi41NDA3NTU1IEMyOTIuMDcwMDUyLDMyLjI0Mzg3MDEgMjkxLjkyMTkxOCwzMS44Nzk1MTA4IDI5MS45MjE5MTgsMzEuNDQ3Njc3NiBDMjkxLjkyMTkxOCwzMC40MjIwNzM2IDI5Mi44NjQ1OTEsMjkuMzQyNDkwNSAyOTQuNzQ5OTM2LDI4LjIwODkyODIgQzI5Ni42MzUyODIsMjcuMDc1MzY2IDI5OC42OTU2OTYsMjYuMjExNjk5NSAzMDAuOTMxMTc3LDI1LjYxNzkyODggQzMwMy4xNjY2NTgsMjUuMDI0MTU4MSAzMDUuMzg4NjczLDI0LjcyNzI3MjcgMzA3LjU5NzIyMSwyNC43MjcyNzI3IFogTTEzMi4zNDE4ODIsMjQuNzI3MjcyNyBDMTMzLjI0ODAwNywyNC43MjcyNzI3IDEzMy45NTU5NDQsMjUuMDUzMTA4NCAxMzQuNDY1NjgxLDI1LjcwNDY1ODEgQzEzNS4wMDM2ODQsMjYuMzU2Mjg3OCAxMzUuMjcyNzI3LDI3LjExNjQ3NTggMTM1LjI3MjcyNywyNy45ODUyMjQxIEMxMzUuMjcyNzI3LDI4Ljc5OTc0OSAxMzUuMDMxOTk4LDI5LjUwNTYzNzggMTM0LjU1MDYzNiwzMC4xMDI4OTI0IEMxMzQuMDY5MjE0LDMwLjY3MzA3MSAxMzMuMzc1NDM3LDMwLjk1ODEzNzQgMTMyLjQ2OTMwNiwzMC45NTgxMDI2IEMxMjguNjQ2NDQxLDMwLjk1ODEzNzQgMTI2LjAzNjc1OCwzMS45MDgzNzYxIDEyMy45MTI5NzcsMzMuODA4ODEyOSBDMTIxLjg2MDI0LDM1LjY3MDUyNzggMTIwLjc2OTE1MywzOC4xNDQ0NTMyIDEyMC43MjcyNzMsNDEuMjMwNTk0NiBMMTIwLjcyNzI3Myw2MS42NTY5NDkzIEMxMjAuNzI3MjczLDYyLjgyNTQ0MTggMTIwLjM1MjIzNSw2My43NTc0NTIyIDExOS42MDIyMTEsNjQuNDUyOTgwNSBDMTE4Ljg3ODk0Miw2NS4xMjA2OTA1IDExOC4wMjE3NTIsNjUuNDU0NTQ1NSAxMTcuMDMwNjQsNjUuNDU0NTQ1NSBDMTE2LjAzOTUwNSw2NS40NTQ1NDU1IDExNS4xOTU3MDQsNjUuMTM0NjAyNiAxMTQuNDk5MjQ5LDY0LjQ5NDcxNjggQzExMy44Mjk1NjQsNjMuODUyNjg4IDExMy40ODE4NDgsNjIuOTUzNDM2IDExMy40NTYwOTEsNjEuNzk2OTYxIEwxMTMuNDU0NTQ1LDYxLjY1Njk0OTMgTDExMy40NTQ1NDUsMjguNDgzMTQxNCBDMTEzLjQ1NDU0NSwyNy4zMTQ2ODgxIDExMy44MTYxNjUsMjYuMzk2NTg4MSAxMTQuNTM5NDI4LDI1LjcyODgzNzcgQzExNS4yODk0NjQsMjUuMDYxMTY5MyAxMTYuMTYwMDQzLDI0LjcyNzI3MjcgMTE3LjE1MTE3OCwyNC43MjcyNzI3IEMxMTguMTE1NTA2LDI0LjcyNzI3MjcgMTE4Ljk0NTkxMiwyNS4wNjExNjkzIDExOS42NDIzOSwyNS43Mjg4Mzc3IEMxMjAuMzM2NywyNi4zNjk4NzgxIDEyMC42OTc3NjMsMjcuMjQxNjQwNyAxMjAuNzI1NTM3LDI4LjM0NDEyODcgTDEyMC43MjcyNzMsMjguNDgzMTQxNCBMMTIwLjcyNzI3MywzMy42MDUxOTI0IEMxMjEuNDM1MTkyLDMxLjA4MDMxMiAxMjIuODUxMDYsMjguOTc2MjIxIDEyNC45NzQ4NzcsMjcuMjkyOTA5MSBDMTI3LjEyNjk3OCwyNS41ODI1MjUyIDEyOS4zNDAyMTgsMjQuNzI3MjcyNyAxMzIuMzQxODgyLDI0LjcyNzI3MjcgWiBNMzg2LjEyNDcxOCwyNC43MjcyNzI3IEMzODguMTI2MjIxLDI0LjcyNzI3MjcgMzkwLjA0NjU4MiwyNC45OTcxNjg1IDM5MS44ODU4LDI1LjUzNjk2MDEgQzM5My43MjUwMTksMjYuMDc2NzUxNiAzOTUuMzQ3ODU5LDI2LjgzMjQ1OTggMzk2Ljc1NDMyLDI3LjgwNDA4NDYgQzM5Ny43ODIxMTksMjguNTU5NzkyOCAzOTguNTI1OTIsMjkuMjIxMDM3NCAzOTguOTg1NzI1LDI5Ljc4NzgxODUgQzM5OS40NDU1MywzMC4zNTQ1OTk3IDM5OS42NzU0MzIsMzAuOTM0ODc1NiAzOTkuNjc1NDMyLDMxLjUyODY0NjMgQzM5OS42NzU0MzIsMzEuOTA2NTAwNCAzOTkuNTQwMTk1LDMyLjI0Mzg3MDEgMzk5LjI2OTcyMiwzMi41NDA3NTU1IEMzOTguOTk5MjQ5LDMyLjgzNzY0MDggMzk4LjY3NDY4MSwzMi45ODYwODM1IDM5OC4yOTYwMTgsMzIuOTg2MDgzNSBDMzk3Ljg2MzI2MSwzMi45ODYwODM1IDM5Ny4xNjAwMywzMi41ODEyMzk4IDM5Ni4xODYzMjYsMzEuNzcxNTUyNSBDMzk0Ljc3OTg2NSwzMC42OTE5Njk0IDM5My4zMDU3ODUsMjkuODAxMzEzMyAzOTEuNzY0MDg3LDI5LjA5OTU4NDMgQzM5MC4yMjIzODksMjguMzk3ODU1MyAzODguMjg4NTA1LDI4LjA0Njk5MDggMzg1Ljk2MjQzNCwyOC4wNDY5OTA4IEMzODIuOTMzMTMzLDI4LjA0Njk5MDggMzgwLjQ4NTM0OSwyOC43NjIyMTQ2IDM3OC42MTkwODMsMzAuMTkyNjYyMiBDMzc2Ljc1MjgxNywzMS42MjMxMDk4IDM3NS44MTk2ODQsMzMuNDk4ODg1NSAzNzUuODE5Njg0LDM1LjgxOTk4OTIgQzM3NS44MTk2ODQsMzcuMjIzNDQ3MiAzNzYuMTE3MjA1LDM4LjM3MDUwNDIgMzc2LjcxMjI0NiwzOS4yNjExNjAzIEMzNzcuMzA3Mjg4LDQwLjE1MTgxNjQgMzc4LjMyMTU2Myw0MC45MjEwMTkzIDM3OS43NTUwNzEsNDEuNTY4NzY5MiBDMzgxLjE4ODU4LDQyLjIxNjUxOTEgMzgzLjIzMDY1NCw0Mi44MzcyNzk0IDM4NS44ODEyOTIsNDMuNDMxMDUwMSBDMzg5LjYxMzgyNCw0NC4zNDg2OTU3IDM5Mi40ODA4NDEsNDUuMjc5ODM2MSAzOTQuNDgyMzQ0LDQ2LjIyNDQ3MTQgQzM5Ni40ODM4NDcsNDcuMTY5MTA2NiAzOTcuOTAzODMyLDQ4LjMwMjY2ODggMzk4Ljc0MjI5OSw0OS42MjUxNTgxIEMzOTkuNTgwNzY2LDUwLjk0NzY0NzQgNDAwLDUyLjYzNDQ5NjEgNDAwLDU0LjY4NTcwNCBDNDAwLDU3LjkyNDQ1MzMgMzk4LjY2MTE1Nyw2MC41Mjg5NDc1IDM5NS45ODM0NzEsNjIuNDk5MTg2NyBDMzkzLjMwNTc4NSw2NC40Njk0MjU5IDM4OS43NDkwNjEsNjUuNDU0NTQ1NSAzODUuMzEzMjk4LDY1LjQ1NDU0NTUgQzM4My4yMDM2MDYsNjUuNDU0NTQ1NSAzODEuMDkzOTE0LDY1LjE0NDE2NTMgMzc4Ljk4NDIyMiw2NC41MjM0MDUgQzM3Ni44NzQ1Myw2My45MDI2NDQ3IDM3NC45ODEyMTcsNjMuMDUyNDczIDM3My4zMDQyODIsNjEuOTcyODg5OSBDMzcyLjIyMjM4OSw2MS4yNzExNjA5IDM3MS40OTIxMTEsNjAuNjkwODg1IDM3MS4xMTM0NDksNjAuMjMyMDYyMiBDMzcwLjczNDc4Niw1OS43NzMyMzk0IDM3MC41NDU0NTUsNTkuMjQ2OTQyNiAzNzAuNTQ1NDU1LDU4LjY1MzE3MTkgQzM3MC41NDU0NTUsNTguMjc1MzE3OCAzNzAuNjgwNjkxLDU3LjkzNzk0ODEgMzcwLjk1MTE2NSw1Ny42NDEwNjI3IEMzNzEuMjIxNjM4LDU3LjM0NDE3NzQgMzcxLjU0NjIwNiw1Ny4xOTU3MzQ3IDM3MS45MjQ4NjksNTcuMTk1NzM0NyBDMzcyLjE5NTM0Miw1Ny4xOTU3MzQ3IDM3Mi41NjA0ODEsNTcuMzQ0MTc3NCAzNzMuMDIwMjg1LDU3LjY0MTA2MjcgQzM3My40ODAwOSw1Ny45Mzc5NDgxIDM3My43OTExMzQsNTguMTQwMzY5OSAzNzMuOTUzNDE4LDU4LjI0ODMyODIgQzM3NS41MjIxNjQsNTkuMzgxODkwNSAzNzcuMTU4NTI3LDYwLjMxMzAzMDkgMzc4Ljg2MjUwOSw2MS4wNDE3NDk1IEMzODAuNTY2NDkxLDYxLjc3MDQ2ODEgMzgyLjcxNjc1NCw2Mi4xMzQ4Mjc0IDM4NS4zMTMyOTgsNjIuMTM0ODI3NCBDMzg4LjgyOTQ1Miw2Mi4xMzQ4Mjc0IDM5MS41MzQxODUsNjEuNDg3MDc3NSAzOTMuNDI3NDk4LDYwLjE5MTU3NzggQzM5NS4zMjA4MTEsNTguODk2MDc4MSAzOTYuMjY3NDY4LDU3LjA2MDc4NjggMzk2LjI2NzQ2OCw1NC42ODU3MDQgQzM5Ni4yNjc0NjgsNTMuMjgyMjQ1OSAzOTUuOTI5Mzc2LDUyLjEyMTY5NDEgMzk1LjI1MzE5Myw1MS4yMDQwNDg0IEMzOTQuNTc3MDEsNTAuMjg2NDAyOCAzOTMuNDY4MDY5LDQ5LjQ5MDIxMDMgMzkxLjkyNjM3MSw0OC44MTU0NzA4IEMzOTAuMzg0NjczLDQ4LjE0MDczMTQgMzg4LjE4MDMxNiw0Ny40Nzk0ODY3IDM4NS4zMTMyOTgsNDYuODMxNzM2OSBDMzgwLjU1Mjk2OCw0NS43NTIxNTM3IDM3Ny4xNDUwMDQsNDQuMzc1Njg1MyAzNzUuMDg5NDA2LDQyLjcwMjMzMTUgQzM3My4wMzM4MDksNDEuMDI4OTc3NiAzNzIuMDA2MDExLDM4LjgxNTgzMjMgMzcyLjAwNjAxMSwzNi4wNjI4OTU0IEMzNzIuMDA2MDExLDMyLjcxNjE4NzcgMzczLjMxNzgwNiwyOS45OTAyNDA0IDM3NS45NDEzOTcsMjcuODg1MDUzMyBDMzc4LjU2NDk4OSwyNS43Nzk4NjYzIDM4MS45NTk0MjksMjQuNzI3MjcyNyAzODYuMTI0NzE4LDI0LjcyNzI3MjcgWiBNMzMwLjA3NjQ2Niw3LjI3MjcyNzI3IEMzMzAuNjIwMjIxLDcuMjcyNzI3MjcgMzMxLjA0MTYzMSw3LjQzNTAxOTY1IDMzMS4zNDA2OTcsNy43NTk2MDQ0MSBDMzMxLjYwNjUzMyw4LjA0ODEyNDIgMzMxLjc1NDIxOSw4LjQ0MzUwMzE3IDMzMS43ODM3NTcsOC45NDU3NDEzMSBMMzMxLjc4OTI5NSw5LjEzOTA4OTY0IEwzMzEuNzg5Mjk1LDMzLjA3NzIxNTcgTDMzMS45NzMxMTgsMzIuNjc2MTUwNiBDMzMzLjE2NTA5OCwzMC4xNjU2MjI4IDMzNC44ODQ2MjIsMjguMjE2NTU4OSAzMzcuMTMxNjkxLDI2LjgyODk1OSBDMzM5LjQ5NzAyNiwyNS4zNjgzMjc2IDM0Mi4zMzgxNDgsMjQuNjM4MDExOSAzNDUuNjU1MDU1LDI0LjYzODAxMTkgQzM0OS4xMzUwODksMjQuNjM4MDExOSAzNTIuMjA3MzA3LDI1LjQ3NjUyMjUgMzU0Ljg3MTcwOCwyNy4xNTM1NDM4IEMzNTcuNTM2MTA5LDI4LjgzMDU2NTEgMzU5LjYwMjM3OSwzMS4xODM4MDQ2IDM2MS4wNzA1MTgsMzQuMjEzMjYyMyBDMzYyLjUzODY1OCwzNy4yNDI3MjAxIDM2My4yNzI3MjcsNDAuNzg2MTAzNyAzNjMuMjcyNzI3LDQ0Ljg0MzQxMzIgQzM2My4yNzI3MjcsNDguOTU0ODIwMiAzNjIuNTM4NjU4LDUyLjU2NTgyNTYgMzYxLjA3MDUxOCw1NS42NzY0Mjk2IEMzNTkuNjAyMzc5LDU4Ljc4NzAzMzUgMzU3LjUzNjEwOSw2MS4xOTQzNzA1IDM1NC44NzE3MDgsNjIuODk4NDQwNSBDMzUyLjIwNzMwNyw2NC42MDI1MTA1IDM0OS4xMzUwODksNjUuNDU0NTQ1NSAzNDUuNjU1MDU1LDY1LjQ1NDU0NTUgQzM0Mi4zMzgxNDgsNjUuNDU0NTQ1NSAzMzkuNDk3MDI2LDY0LjcyNDIyOTcgMzM3LjEzMTY5MSw2My4yNjM1OTgzIEMzMzQuODc4OTksNjEuODcyNTIwOCAzMzMuMTU2NDgyLDU5Ljg5MjYyNzQgMzMxLjk2NDE2Niw1Ny4zMjM5MTggTDMzMS43ODkyOTUsNTYuOTM0MTk1NSBMMzMxLjc4OTI5NSw2My4zNDQ3NDQ1IEwzMzEuNzg1MDEzLDYzLjUyNjcxNDggQzMzMS43MzA3NzMsNjQuNjQ5NjQyOSAzMzEuMTYxMjU3LDY1LjIxMTEwNjkgMzMwLjA3NjQ2Niw2NS4yMTExMDY5IEMzMjkuNTMyNzEsNjUuMjExMTA2OSAzMjkuMTExMyw2NS4wNDg4MTQ1IDMyOC44MTIyMzQsNjQuNzI0MjI5NyBDMzI4LjU0NjM5OSw2NC40MzU3MSAzMjguMzk4NzEyLDY0LjA0MDMzMSAzMjguMzY5MTc1LDYzLjUzODA5MjggTDMyOC4zNjM2MzYsNjMuMzQ0NzQ0NSBMMzI4LjM2MzYzNiw5LjEzOTA4OTY0IEwzMjguMzY3OTE4LDguOTU3MTE5MzEgQzMyOC40MjIxNTgsNy44MzQxOTEyOSAzMjguOTkxNjc0LDcuMjcyNzI3MjcgMzMwLjA3NjQ2Niw3LjI3MjcyNzI3IFogTTE3Ny44Nzc1MDYsMjQuNzI3Mjc1NyBDMTgxLjY2NjYwOCwyNC43MjcyNzU3IDE4NS4xODg2MSwyNS43MDM2OTY3IDE4Ny44MTM5OTgsMjcuNDc2NTYyOSBDMTg5Ljg5NjM2NywyOC44ODI3NjA3IDE5MS41ODgwMzMsMzEuMDQ4OTgxOCAxOTIuMjcxNDE5LDMzLjE4NDQyMzIgQzE5Mi42NjM4MDYsMzQuNDEwNTE3MyAxOTIuNzIzNDU2LDM0Ljg2MzU4NTcgMTkyLjcyNzE3OSwzNi42NDQ0NTEyIEMxOTIuNzI5MTgsMzcuNzUyNTQ5NCAxOTIuNjk5MjMsMzguNDk5OTcyIDE5Mi42Mzg0MzYsMzguODQ2MjgxMSBDMTkyLjAyNDAxNyw0Mi4zNDY0MzkyIDE5MC41NjA1MTQsNDQuNzcxMjcxOSAxODguMDIwMjc4LDQ2LjQ5NzkwODIgQzE4NS45NzY2ODgsNDcuODg2OTQzNyAxODMuNDEwMTIxLDQ4LjY5OTcyNDggMTgwLjA1MzM3LDQ5LjAyMDc2NTMgQzE3OC4zNjM2MTIsNDkuMTgyMzY5MSAxNzUuMjczMDM0LDQ5LjE2NzEwNjMgMTczLjI3MDksNDguOTg3MjAzMiBDMTcxLjU3MTcwNyw0OC44MzQ1NjE4IDE2OS40ODUyMDcsNDguNTY1OTcxMiAxNjguNTk1MTA3LDQ4LjM4NTM1OTIgQzE2Ny44NTAwNTksNDguMjM0MTQ5MSAxNjUuMjk4NzAzLDQ3LjgwMTEwNTUgMTY1LjI3NzY5Niw0Ny44MjIzMDc1IEMxNjUuMjY4NDQ2LDQ3LjgzMTgwNSAxNjUuMTQ3MDQ3LDQ4LjYwNzQxMjIgMTY1LjAwNzk1Nyw0OS41NDYyOTUzIEMxNjQuNzg1ODc4LDUxLjA0NTM4MDggMTY0Ljc1NDQxOSw1MS40MTk0MzMyIDE2NC43NDk3NTksNTIuNjE2MzkyOCBMMTY0Ljc0OTk4NSw1My4yMDQwMTQzIEMxNjQuNzU1NjYzLDUzLjkyNTY2NzggMTY0Ljc4ODg4Miw1NC4xNTIxNzgxIDE2NC45MDYyMzksNTQuNjA4NTE2MyBDMTY1LjM3MDcxMSw1Ni40MTQ1NDM0IDE2Ni4zOTQyODEsNTcuNjIyNjMyNCAxNjguMjUxMjk3LDU4LjU1NjU5MjggQzE3MC4wNzgwOTgsNTkuNDc1MzU3NCAxNzEuOTkzMTY3LDU5Ljg3MjkzOTQgMTc0Ljg4NjgwNSw1OS45MzQyMzE0IEMxNzYuMTY3ODkxLDU5Ljk2MTYyNjggMTc2LjgyMzk1OCw1OS45NDI1MjQ5IDE3Ny42MjU0MzIsNTkuODU2Mjg1NCBDMTc5LjU2ODM2OSw1OS42NDY4NiAxODAuNDUzNzMyLDU5LjQxNzA4ODYgMTgzLjAzNTA2NCw1OC40NTI0Mjg2IEMxODMuNjc3OTg1LDU4LjIxMjEyOTcgMTg0LjMzNDExOCw1Ny45OTM0ODc3IDE4NC40OTMxNDUsNTcuOTY2NTMzNyBDMTg0LjgzMzkzNiw1Ny45MDg3NzMxIDE4NS40Njk1MTUsNTguMDI4MDUzMSAxODUuODM5OTQsNTguMjE5MzUzMSBDMTg2LjUwODU0OCw1OC41NjQ1Mzg2IDE4Ny4wNzAyOTIsNTkuNDg1MTQ5MiAxODcuMDY2NzkxLDYwLjIyOTg4MyBDMTg3LjA2Mjk3NSw2MS4wOTk5Mjk2IDE4Ni43NzQyNDEsNjEuNjI2OTE3NyAxODUuOTI2ODgxLDYyLjMxMjI1OSBDMTgzLjkwMDgxOSw2My45NTA5MzAzIDE4MS4zMTM5MjEsNjQuOTU1ODU0MSAxNzguMjI1ODc3LDY1LjMwMzkwMjIgQzE3Ny4xMjQ3Miw2NS40MjgwMzc5IDE3NC42MTA2MDQsNjUuNDQ2MzIzOCAxNzMuMzk2MjI1LDY1LjMzOTEyMzEgQzE2OS45NzYzMzEsNjUuMDM3MTcxIDE2Ny42MDE5NjcsNjQuNDQyNTYzOCAxNjUuNDMyMDY4LDYzLjM0NDgwNTcgQzE2My43Mzg5NTIsNjIuNDg4MjQyOCAxNjIuNDQ3MTU2LDYxLjQyNTU5ODUgMTYxLjQ4MjM0MSw2MC4wOTU2NzQ3IEMxNjEuMjQ1MjcyLDU5Ljc2ODg4MjEgMTYxLjA0MzkwMSw1OS40OTMzNjI0IDE2MS4wMzQ4NDQsNTkuNDgzMjg5OCBDMTYxLjAyNTc2NSw1OS40NzMyNTczIDE2MC44NjgyMDYsNTkuNjYyMDE1NyAxNjAuNjg0NjUsNTkuOTAyNjg5MSBDMTU5Ljg3MzI4OSw2MC45NjY2MTc2IDE1OC42MzI1NDksNjIuMTEwMTc3NCAxNTcuNDIwMDQyLDYyLjkxMTYwMTYgQzE1NS42Njk2MDYsNjQuMDY4NTc4MyAxNTMuMTU2Njc0LDY0Ljk1MTIxMjQgMTUwLjYxMzkyMiw2NS4zMDIyMTY4IEMxNDkuODU1NjEyLDY1LjQwNjg0OTIgMTQ3LjMzOTY1OSw2NS40OTMxODI0IDE0Ni42OTQ1MDMsNjUuNDM2NjUyNSBDMTQyLjIzODE1Miw2NS4wNDYxMDY3IDEzOC44MzI4OTYsNjMuNjc5NjUxIDEzNi4zNTYxMjEsNjEuMjg4MDQ2IEMxMzMuODM2MjA5LDU4Ljg1NDcwNTggMTMyLjc1NDk1LDU1LjY4MjI5IDEzMy4xODE2NjksNTEuOTc0MDQ0MiBDMTMzLjY3MjcxNSw0Ny43MDY3MDYyIDEzNS42Njc1OCw0NC42OTMyMDU1IDEzOS4xNjUwOTcsNDIuOTM1MTYwNyBDMTQxLjg2MDcxLDQxLjU4MDE4MjIgMTQ0LjU0OTg2NSw0MS4wNjQ3NjUgMTQ4LjkyOTI1OSw0MS4wNjM3MDgyIEMxNTIuMDQwNzkyLDQxLjA2MjM3MDYgMTU0LjY0ODA3Miw0MS4zMjEzODM0IDE1OC42MjQ2Niw0Mi4wMjQ2NzYzIEMxNTkuNjA3OTUyLDQyLjE5ODU4NjYgMTYwLjQ1OTI2LDQyLjM0MDk1NDcgMTYwLjUxNjQ2LDQyLjM0MTA3NTEgQzE2MC41OTk2MzksNDIuMzQxMDc1MSAxNjAuNjY1NjA2LDQyLjAyMjk1MDcgMTYwLjg0NjAyNiw0MC43NTEwNTQ5IEMxNjEuMTcyNDYyLDM4LjQ0OTgwOTQgMTYxLjIzMDk3LDM3LjY1NTc0MjMgMTYxLjE0MjAzNiwzNi43MzM5MTQ1IEMxNjEuMDM4NTIsMzUuNjYwODc2NiAxNjAuOTAzNDIyLDM1LjE0OTc4IDE2MC41MDM1MiwzNC4zMTgxOTEzIEMxNTkuNDcxNzM4LDMyLjE3MjY3NzMgMTU3LjAyMjQ1NiwzMC44NTk5NjkyIDE1My4wODkzNDIsMzAuMzQ0NTUyIEMxNTEuOTY0NTA2LDMwLjE5NzE1NDIgMTQ5LjM2ODQ1MywzMC4xNzY1Mjc0IDE0OC4yNDE2NDEsMzAuMzA1OTczNiBDMTQ2LjM1Mzc4NywzMC41MjI5NDM1IDE0NS4zMDAyOTcsMzAuNzk5Mzk5NiAxNDIuOTUwODE1LDMxLjY5NDI4NjcgQzE0MS41NzYyNDYsMzIuMjE3ODYzOCAxNDEuNTY5OTY0LDMyLjIxOTQ4MjMgMTQxLjAyMTY2MywzMi4xODY3NjMgQzE0MC4wNzkwNzgsMzIuMTMwNjIxIDEzOS40MzU2MDYsMzEuNjk2ODAxNiAxMzkuMDIyODg2LDMwLjgzOTI3NTUgQzEzOC44NTI5MTQsMzAuNDg2MTQ0MiAxMzguODIzMDI4LDMwLjM0MDM2NTEgMTM4LjgyMzAyMSwyOS44NjQ1NDI4IEMxMzguODIzMDIxLDI5LjE1MDI0MSAxMzkuMDA2MDIyLDI4Ljc3MTAzODYgMTM5LjY0MzIzOSwyOC4xNjUxMDEzIEMxNDEuMDcyMTg1LDI2LjgwNjI1NyAxNDMuNDc2Nzg2LDI1LjY0OTA2NjMgMTQ1LjkwMzc0NCwyNS4xNTIyMTU5IEMxNDcuNDU3NzQ4LDI0LjgzNDA5MTUgMTQ4LjIyMjcxNCwyNC43NjcyMDggMTUwLjI3MDExMiwyNC43NzA0MDUxIEMxNTIuMzg4NjQ1LDI0Ljc3NjAyMzMgMTUzLjc0MzI4OCwyNC44OTUzMTY2IDE1NS42MjU5NjIsMjUuMjUxMTkgQzE1OC43NTc0MTMsMjUuODQzMDQxNyAxNjEuMTM1MTY2LDI2Ljg4NjI3NjMgMTYyLjkyODEzLDI4LjQ1NDkyMDYgQzE2My40NjAxMzIsMjguOTIwMzQ5MiAxNjQuMjYyMzM5LDI5LjgzNjQxMTcgMTY0LjYwNjA4LDMwLjM3MDk1NzYgQzE2NC43MTExNDMsMzAuNTM0MzUzOCAxNjQuODE5Mzc0LDMwLjY2ODA1MzggMTY0Ljg0NjU4NywzMC42NjgwNTM4IEMxNjQuODczODE3LDMwLjY2ODA1MzggMTY1LjA0NzYxMywzMC40NzE3MjQyIDE2NS4yMzI4MywzMC4yMzE4MjY2IEMxNjcuOTQ3NzY3LDI2LjcxNTA1NDcgMTcyLjUyMDM1NSwyNC43MjQ0ODI5IDE3Ny44Nzc1MDYsMjQuNzI3Mjc1NyBaIE0zMTcuODE4MTgyLDQ1LjQ1NDU0NTUgTDMxNi4yNzczMDUsNDUuNDU0NTQ1NSBMMzE1LjY3NDIzNyw0NS40NTU0MTk0IEMzMTAuMjkzMTY5LDQ1LjQ3MTE1MDUgMzA2LjE2ODkyNSw0NS42OTkyNTE1IDMwMy4zMDE1MDQsNDYuMTM5NzIyMyBDMzAwLjMyNzg4Myw0Ni41OTY1MDY5IDI5OC4yNDYzNDgsNDcuMzc1NzI3NyAyOTcuMDU2OSw0OC40NzczODQ3IEMyOTUuODY3NDUxLDQ5LjU3OTA0MTYgMjk1LjI3MjcyNyw1MS4yMDQ2NTc0IDI5NS4yNzI3MjcsNTMuMzU0MjMyIEMyOTUuMjcyNzI3LDU1LjgyNjI0MjcgMjk2LjE5MTg0Nyw1Ny44NTQ5MDM3IDI5OC4wMzAwODUsNTkuNDQwMjE1IEMyOTkuODY4MzI0LDYxLjAyNTUyNjIgMzAyLjE5MzE1NSw2MS44MTgxODE4IDMwNS4wMDQ1NzgsNjEuODE4MTgxOCBDMzA3LjQzNzU0MSw2MS44MTgxODE4IDMwOS42MjcyMDcsNjEuMjQwNDgzNyAzMTEuNTczNTc4LDYwLjA4NTA4NzMgQzMxMy41MTk5NDgsNTguOTI5NjkxIDMxNS4wNDczMDgsNTcuMzMwOTQ0OSAzMTYuMTU1NjU3LDU1LjI4ODg0OTEgQzMxNy4xOTQ3MzUsNTMuMzc0Mzg0MiAzMTcuNzQ2NzQ1LDUxLjIyMzc2MDEgMzE3LjgxMTY4OCw0OC44MzY5NzY2IEwzMTcuODE4MTgyLDQ4LjM1NjQ3MTEgTDMxNy44MTgxODIsNDUuNDU0NTQ1NSBaIE0zNDUuMzczMjYyLDI3LjYzNjM2MzYgQzM0MC45ODM5NTcsMjcuNjM2MzYzNiAzMzcuNTk3MTQ4LDI5LjEyNDg4MyAzMzUuMjEyODM0LDMyLjEwMTkyMTggQzMzMi44Mjg1MiwzNS4wNzg5NjA2IDMzMS42MzYzNjQsMzkuMjczODc4OSAzMzEuNjM2MzY0LDQ0LjY4NjY3NjcgQzMzMS42MzYzNjQsNTAuMTUzNjAyNSAzMzIuODI4NTIsNTQuMzc1NTg0OCAzMzUuMjEyODM0LDU3LjM1MjYyMzYgQzMzNy41OTcxNDgsNjAuMzI5NjYyNCAzNDEuMDExMDUyLDYxLjgxODE4MTggMzQ1LjQ1NDU0NSw2MS44MTgxODE4IEMzNDkuNzg5NjYxLDYxLjgxODE4MTggMzUzLjE3NjQ3MSw2MC4zMDI1OTg0IDM1NS42MTQ5NzMsNTcuMjcxNDMxNyBDMzU4LjA1MzQ3Niw1NC4yNDAyNjQ5IDM1OS4yNzI3MjcsNDkuOTkxMjE4NiAzNTkuMjcyNzI3LDQ0LjUyNDI5MjggQzM1OS4yNzI3MjcsMzkuMTY1NjIzIDM1OC4wNTM0NzYsMzUuMDExMzAwNyAzNTUuNjE0OTczLDMyLjA2MTMyNTggQzM1My4xNzY0NzEsMjkuMTExMzUxIDM0OS43NjI1NjcsMjcuNjM2MzYzNiAzNDUuMzczMjYyLDI3LjYzNjM2MzYgWiBNMTQ5LjUxMDI4MSw0Ni4zOTIwMDQ1IEMxNDYuODAyNjMzLDQ2LjU0NzM0MjQgMTQ1LjY5ODgxOSw0Ni43ODk0MzY3IDE0NC4wNzMxNTksNDcuNTg0NTg4NiBDMTQzLjI0MDMzMyw0Ny45OTE5MTg5IDE0Mi42NjU1MTYsNDguNDMzOTY0OSAxNDIuMjEwNzA0LDQ5LjAxNjc1NjQgQzE0MS41NTgxOTUsNDkuODUyOTUyNiAxNDEuMTY0MzQ4LDUwLjY4MzkwNTUgMTQwLjg4OTgyLDUxLjgwMzU4MDEgQzE0MC42OTAwNDMsNTIuNjE4MzQ1NCAxNDAuNjY5NjU2LDU0Ljc1MTc0MzQgMTQwLjg1NTA3Niw1NS40MzkxMTMzIEMxNDEuMTY3NDIyLDU2LjU5Njk4MTggMTQxLjUzODIwNyw1Ny4yNTIzMTY2IDE0Mi4zNzE5NzIsNTguMTIwMDUxIEMxNDMuNTEzNjU5LDU5LjMwODIxNTUgMTQ1LjAxODY5Miw2MC4xMDA4NDM5IDE0Ni44ODU1MzksNjAuNDk3MTkwOCBDMTQ3LjUzODY4LDYwLjYzNTg2OTYgMTQ3LjczMTcxLDYwLjY3ODczODcgMTQ4LjMwMDQ1LDYwLjY4NDA4OTUgTDE0OC41OTI2NjYsNjAuNjg0MTA3NCBDMTQ4LjgwOTMyMSw2MC42ODI2MjY0IDE0OS4wNzM3MTksNjAuNjc4NDQyMyAxNDkuNDEwMjA5LDYwLjY3MzI1MzQgQzE1MC41Njk5NjIsNjAuNjU1MjIyMiAxNTEuMDAzODc2LDYwLjYyMTg2NjQgMTUxLjQ3ODMxNyw2MC41MTQyOTM2IEMxNTMuNDkyNDczLDYwLjA1NzExOTIgMTU1LjI4NzM4Miw1OS4wMjY2NTkyIDE1Ni41OTA0MDMsNTcuNTc5NTE5OCBDMTU3Ljc3ODk5LDU2LjI1OTUxNDIgMTU4Ljc1Mzg3OCw1NC4yODIwMDMzIDE1OS4yOTA0MDUsNTIuMTAyNzg4NiBDMTU5LjQwNTEyMiw1MS42MzY4MjQ2IDE1OS41NDg2NTUsNTAuODU1Njk1OSAxNTkuNjc2NTU3LDUwLjA2MTY4NjYgTDE1OS43NDQ1MDQsNDkuNjI5MTMgQzE1OS45MjAxMzgsNDguNDgxOTI5NCAxNjAuMDQ1NjA0LDQ3LjQyMzc1NzcgMTU5Ljk4NDEyMiw0Ny4zODQ4NTkyIEMxNTkuOTQwMTQzLDQ3LjM1Njk4MiAxNTkuNjc0NDY0LDQ3LjMxMjk4MjcgMTU5LjM5Mzc5Niw0Ny4yODY5NjIzIEMxNTkuMTEzMTIsNDcuMjYwNzE5NiAxNTguMzEzMDgsNDcuMTY0MTk1NyAxNTcuNjE1OTI4LDQ3LjA3MTg2OTEgQzE1My40NzQ5MzUsNDYuNTIzMzQ4NyAxNTAuOTM0NDg3LDQ2LjMxMDIyOTkgMTQ5LjUxMDI4MSw0Ni4zOTIwMDQ1IFogTTE3NC43NjYwOTksMjkuOTg2NjExMSBDMTczLjI5MTQyOCwzMC4yNjM1ODI5IDE3Mi4wNDQ4OTcsMzAuNzY4NDI4MiAxNzAuOTQ1NTA4LDMxLjUzMzg3MDQgQzE2OC45MTQzNTgsMzIuOTQ4MDc1OSAxNjcuNTEyNTg2LDM1LjA3OTg1NTcgMTY2LjczMTk5OSwzNy45NDE2MzE1IEMxNjYuNDI1MzkxLDM5LjA2NTcxMDQgMTY2LjM0MzY1NywzOS40OTcxNzY0IDE2Ni4wNzAyOTMsNDEuNDM0ODAxIEwxNjUuODE4MTMsNDMuMjIyMTg1NSBMMTY2LjE1NTkxMSw0My4yNjA0ODUxIEMxNjcuMTc2MDk3LDQzLjM3NjkyODQgMTY5LjQ3NjU4OSw0My42NjM2NjQ5IDE3MC44MTI2MTgsNDMuODQwOTQ3OCBDMTcwLjk1MjcwNiw0My44NTk1MzQ4IDE3MS4wOTgxMDEsNDMuODc4MzI5NyAxNzEuMjQ1MDg4LDQzLjg5NjkwNDMgTDE3MS42ODcxMDksNDMuOTUxNTM4NyBDMTcyLjA1MzI1LDQzLjk5NTgwMjcgMTcyLjQwNjEyNSw0NC4wMzYwMTI3IDE3Mi42ODc2OTUsNDQuMDY1NDc2MSBMMTcyLjk4NzYzOCw0NC4wOTUyNDU2IEMxNzMuMDMwNjg2LDQ0LjA5OTIwNDcgMTczLjA2OTk1NCw0NC4xMDI2MjY4IDE3My4xMDQ5NzYsNDQuMTA1NDU4NSBDMTc0LjMxOTkyNSw0NC4yMDM2MjkgMTc2LjQ5ODIwMSw0NC4xOTQ0OTI2IDE3Ny42ODk2NjksNDQuMDg2MzA4NyBDMTc5LjM2NzQwOSw0My45MzQzMDE1IDE4MC4zOTkwMTYsNDMuNjY2MTc4MSAxODEuNjY2NTExLDQzLjA1MzIxNDMgQzE4Mi43MjA2NzYsNDIuNTQzMzU1OCAxODMuMzMzMzc5LDQyLjAyMjI2NjYgMTgzLjkxMzE4Niw0MS4xNDI0NDkyIEMxODQuNzY2OCwzOS44NDcwOTU1IDE4NS4wOTkxOTksMzguNjIxMjQ2NSAxODUuMDkwODI3LDM2Ljc5OTkzNDQgQzE4NS4wODQ1NjQsMzUuNTAxNzkyNiAxODQuOTc3Njg5LDM0Ljk2MTc3NjEgMTg0LjU0MjM0MywzNC4wMjk4MTA1IEMxODMuNTY5NjM1LDMxLjk0NzU0OCAxODEuMjg0NjA5LDMwLjQ1NjAzNjUgMTc4LjI4NzY4NiwyOS45NDcxOTg5IEMxNzcuNTM5ODU0LDI5LjgyMDI1NzkgMTc1LjUzMjY0MiwyOS44NDI3OTc4IDE3NC43NjYwOTksMjkuOTg2NjExMSBaIE0yMzAuNTgyNzQ5LDcuMjcyNzI3MjcgQzIzMS44NzU2NjgsNy4yNzI3MjcyNyAyMzIuOTE5OTU4LDcuNjI5ODMxODUgMjMzLjcxNTYxNyw4LjM0Mzg5MTYxIEMyMzQuNTExMjU2LDkuMDM1MDEzMzggMjM0LjkwOTA5MSw5Ljk1NjQ0Mzg4IDIzNC45MDkwOTEsMTEuMTA4MTg2MSBDMjM0LjkwOTA5MSwxMi4yMzY5ODQ4IDIzNC41MTEyNTYsMTMuMTU4NDE1MyAyMzMuNzE1NjE3LDEzLjg3MjQ4MDUgQzIzMi45MTk5NTgsMTQuNTYzNTk2OSAyMzEuODYzMjM1LDE0LjkwOTA5MDkgMjMwLjU0NTQ1NSwxNC45MDkwOTA5IEMyMjkuMjI3NjUzLDE0LjkwOTA5MDkgMjI4LjE3MDkzLDE0LjU2MzU5NjkgMjI3LjM3NTI5MiwxMy44NzI0ODA1IEMyMjYuNTc5NjM3LDEzLjE1ODQxNTMgMjI2LjE4MTgxOCwxMi4yMzY5ODQ4IDIyNi4xODE4MTgsMTEuMTA4MTg2MSBDMjI2LjE4MTgxOCw5Ljk3OTQ3OTY3IDIyNi41Nzk2MzcsOS4wNTgwNDkxNyAyMjcuMzc1MjkyLDguMzQzODkxNjEgQzIyOC4xOTU3OTcsNy42Mjk4MzE4NSAyMjkuMjY0OTQ4LDcuMjcyNzI3MjcgMjMwLjU4Mjc0OSw3LjI3MjcyNzI3IFoiIGlkPSJDb21iaW5lZC1TaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+`

storiesOf('Components|Nav', module).add('default', () => (
  <>
    <Box mb="4">
      <Nav>
        <Container>
          <NavItem>
            <img src={`data:image/svg+xml;base64,${getBase64Logo()}`} height="30px" />
          </NavItem>
          <NavGroups>
            <NavGroup variant="right">
              <NavItem variant="active">Documentation</NavItem>
              <NavItem>
                <Text size={2} sx={{ color: 'grays.5', fontWeight: 600 }}>
                  Github
                </Text>
              </NavItem>
            </NavGroup>
            <NavGroup variant="left">
              <NavItem>
                <Text size={2} sx={{ color: 'grays.5', fontWeight: 600 }}>
                  Box
                </Text>
              </NavItem>
              <NavItem variant="active">
                <Text size={2} sx={{ color: 'grays.5', fontWeight: 600 }}>
                  Layout
                </Text>
              </NavItem>
              <NavItem>
                <Text size={2} sx={{ color: 'grays.5', fontWeight: 600 }}>
                  Button
                </Text>
              </NavItem>
            </NavGroup>
          </NavGroups>
        </Container>
      </Nav>
    </Box>
    <Box mb="4">
      <Nav>
        <NavGroup variant="right">
          <NavItem variant="active">
            <Text size={2} sx={{ color: 'white', fontWeight: 600 }}>
              Documentation
            </Text>
          </NavItem>
          <NavItem>
            <Text size={2} sx={{ color: 'grays.5', fontWeight: 600 }}>
              Github
            </Text>
          </NavItem>
        </NavGroup>
      </Nav>
    </Box>
    <Box mb="4">
      <Nav>
        <NavGroup variant="left">
          <NavItem>
            <Text size={2} sx={{ color: 'grays.5', fontWeight: 600 }}>
              Box
            </Text>
          </NavItem>
          <NavItem variant="active">
            <Text size={2} sx={{ color: 'white', fontWeight: 600 }}>
              Layout
            </Text>
          </NavItem>
          <NavItem>
            <Text size={2} sx={{ color: 'grays.5', fontWeight: 600 }}>
              Button
            </Text>
          </NavItem>
        </NavGroup>
      </Nav>
    </Box>

    <Box mb="4">
      <Nav>
        <NavGroup variant="left">
          <NavItem as="a" href="https://traefik.io">
            Traefik Labs Website
          </NavItem>
        </NavGroup>
      </Nav>
    </Box>
  </>
))
