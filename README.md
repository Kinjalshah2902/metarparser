# metarparser

A METAR report is a loose international semi-standard used by airports for reporting information about wind speeds, humidity, and weather conditions. We’re going to write a program that parses a subset of these reports from a stream and keeps some running aggregates.

Find Reports on Following Websites
https://flightplanning.navcanada.ca/cgi-bin/CreePage.pl?Langue=anglais&NoSession=NS_Inconnu&Page=Fore-obs%2Fmetar-taf-map&TypeDoc=html

Example Reports
YYZ 122201Z 12023MPS
LAX 022355Z 09332G78KT
FR 110232Z 001100G12MPS

