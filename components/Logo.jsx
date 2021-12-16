import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import styles from "./universal.module.css"
// import logoGlb from '../public/logo.glb'


export default function Logo() {
    const canvasRef = useRef(null)
    const logoRef = useRef(null)
    useEffect(() => {
        if (canvasRef.current === null) return;

        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true })
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)
        camera.position.set(0, 0, 10)

        const light = new THREE.HemisphereLight(0xFFFFFF, 0x333333, 2)
        scene.add(light)

        const control = new OrbitControls(camera, canvasRef.current)
        control.update()

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        scene.add(directionalLight);

        const lineColors = ['#df4200', '#0097df', '#dfc200']
        let lines = []
        const generateLines = () => {
            lineColors.forEach((color, index) => {

                const material = new THREE.LineBasicMaterial({ color: color });
                const points = [];
                const x = 5 * Math.random() - 2.6
                const z = 5 * Math.random() - 2.5
                points.push(new THREE.Vector3(x, -7, z));
                points.push(new THREE.Vector3(x, -4, z));
                const geometry = new THREE.BufferGeometry().setFromPoints(points);
                const line = new THREE.Line(geometry, material);

                lines.push(line)
            })
        }
        const generateLinesGroup = () => {
            generateLines()
            generateLines()
            generateLines()
        }
        scene.add(...lines);

        const gltfLoader = new GLTFLoader()
        gltfLoader.load('./logo.glb', gltf => {
            logoRef.current = gltf.scene
            gltf.scene.rotation.x += 0.5
            gltf.scene.rotation.y += 0.5
            scene.add(gltf.scene)
        })

        let preTime = 0
        const logoAnime = (time) => {
            if (!logoRef.current) { return }
            // 按一定时间循环运动
            const rx = (time - preTime) / 1000 % 1.8 < 0.9 ? 0.005 : -0.005
            const ry = (time - preTime) / 1000 % 2.2 < 1.1 ? 0.005 : -0.005
            const rz = (time - preTime) / 1000 % 3.2 < 1.6 ? 0.005 : -0.005
            const py = (time - preTime) / 1000 % 4.0 < 2.0 ? 0.008 : -0.008
            logoRef.current.rotation.x += rx
            logoRef.current.rotation.y += ry
            logoRef.current.rotation.z += rz
            logoRef.current.position.y += py
        }


        const render = (time) => {
            // line.position.y+=0.01
            if (!lines[0]) {
                generateLinesGroup()
                scene.add(...lines)
            }
            lines.forEach(line => {
                if ((time - preTime) / 1000 % 3 > 2) {
                    scene.remove(...lines)
                    lines = []

                }
                line.position.y += Math.random() / 5+0.05
            })
            logoAnime(time)
            renderer.render(scene, camera)
            window.requestAnimationFrame(render)
        }
        window.requestAnimationFrame(render)

        const handleResize = () => {
            if (canvasRef.current === null) { return }

            const width = canvasRef.current.clientWidth
            const height = canvasRef.current.clientHeight

            camera.aspect = width / height
            camera.updateProjectionMatrix()
            renderer.setSize(width, height, false)
        }
        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <div>
            <canvas ref={canvasRef} className={styles.LogoCanvas}></canvas>
        </div>
    )
}
