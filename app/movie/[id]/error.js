"use client"
import React from 'react'
import Link  from 'next/link'

function Movie404() {
    return (
        <div
            style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}
        >
            <h1>An error has occured, sorry for that!</h1>
            <Link
                href="/"
                style={{
                    textDecoration: "underline",
                    fontSize: 20,
                    marginTop: 8
                }}
            >
                Go Home
            </Link>

        </div>
    )
}

export default Movie404