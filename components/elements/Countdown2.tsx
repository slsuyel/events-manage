'use client'
import { useEffect, useState } from "react"

const msInSecond = 1000
const msInMinute = 60 * msInSecond
const msInHour = 60 * msInMinute
const msInDay = 24 * msInHour

const getPartsOfTimeDuration = (duration: number) => {
	const days = Math.floor(duration / msInDay)
	const hours = Math.floor((duration % msInDay) / msInHour)
	const minutes = Math.floor((duration % msInHour) / msInMinute)
	const seconds = Math.floor((duration % msInMinute) / msInSecond)

	return { days, hours, minutes, seconds }
}

export default function Countdown2() {
	const [timeDif, setTimeDif] = useState(() => {
		const now = Date.now()
		const endDateTime = new Date(2025, 6, 16)
		return endDateTime.getTime() - now
	})

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeDif((prev) => {
				const updatedTime = prev - 1000
				if (updatedTime <= 0) {
					clearInterval(interval)
					return 0
				}
				return updatedTime
			})
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	const timeParts = getPartsOfTimeDuration(timeDif)

	return (
		<div className="container py-5">
			<div className="row justify-content-center">
				{/* Days */}
				<div className="col-6 col-sm-3 col-md-2 my-2">
					<div className="time-box p-3 text-center rounded shadow-sm bg-light">
						<span className="time-value display-4">{timeParts.days}</span>
						<span className="d-block mt-2">Days</span>
					</div>
				</div>
				{/* Hours */}
				<div className="col-6 col-sm-3 col-md-2 my-2">
					<div className="time-box p-3 text-center rounded shadow-sm bg-light">
						<span className="time-value display-4">{timeParts.hours}</span>
						<span className="d-block mt-2">Hours</span>
					</div>
				</div>
				{/* Minutes */}
				<div className="col-6 col-sm-3 col-md-2 my-2">
					<div className="time-box p-3 text-center rounded shadow-sm bg-light">
						<span className="time-value display-4">{timeParts.minutes}</span>
						<span className="d-block mt-2">Minutes</span>
					</div>
				</div>
				{/* Seconds */}
				<div className="col-6 col-sm-3 col-md-2 my-2">
					<div className="time-box p-3 text-center rounded shadow-sm bg-light">
						<span className="time-value display-4">{timeParts.seconds}</span>
						<span className="d-block mt-2">Seconds</span>
					</div>
				</div>
			</div>
		</div>
	)
}
